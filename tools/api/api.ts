import {
  CreateDeploymentInput,
  CreateDeploymentVersionInput,
  GetDeploymentQuery,
  CreateDeploymentMutation,
  UpdateDeploymentMutation,
  GetDeploymentVersionQuery,
  CreateDeploymentVersionMutation,
  UpdateDeploymentVersionMutation,
} from '../../src/API'
import fetch, { RequestInit } from 'node-fetch'
import {
  createDeployment,
  createDeploymentVersion,
  updateDeployment,
  updateDeploymentVersion,
} from '../../src/graphql/mutations'
import { getDeployment, getDeploymentVersion } from '../../src/graphql/queries'
import tap from 'ramda/src/tap'
import { GraphQLError as GQLErr } from 'graphql'
import { ApolloError } from 'apollo-client'
import assoc from 'ramda/es/assoc'

interface QueryBody {
  query: string
  variables?: { [key: string]: any }
}

interface UpsertOptions<TInput, TCreate, TGet, TUpdate, TResult> {
  createAccessor: (value: TCreate) => TResult
  updateAccessor: (value: TUpdate) => TResult
  exists: (value: TGet) => boolean
  keyAccessor: (value: TInput) => { [key: string]: any }
  getQuery: string
  createQuery: string
  updateQuery: string
}

interface GqlResponse<T> {
  data?: T
  errors?: ReadonlyArray<GQLErr>
}

interface Options {
  fetchOptions?: RequestInit
  logger?: typeof console
}

class GQLException extends Error {
  public errors: ReadonlyArray<GQLErr>
  constructor(message: string, errors: ReadonlyArray<GQLErr>) {
    super(message)
    this.errors = errors
  }
}

export function createClient(
  apiUrl: string,
  { logger = console, fetchOptions = {} }: Options = {}
) {
  const runQuery = <T = any>(body: QueryBody): Promise<GqlResponse<T>> => {
    return fetch(apiUrl, {
      ...fetchOptions,
      headers: {
        ...(fetchOptions.headers || {}),
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(tap(json => logger.debug(JSON.stringify(json))))
  }

  const upsert = <TInput, TCreate, TGet, TUpdate, TResult>({
    createAccessor,
    updateAccessor,
    exists,
    keyAccessor,
    getQuery,
    createQuery,
    updateQuery,
  }: UpsertOptions<TInput, TCreate, TGet, TUpdate, TResult>) => async (
    input: TInput
  ) => {
    const variables = keyAccessor(input)

    const currentValue = await runQuery<TGet>({ query: getQuery, variables })

    if (currentValue.data && exists(currentValue.data)) {
      const updated = await runQuery<TUpdate>({
        query: updateQuery,
        variables: { input },
      })
      if (updated.errors) {
        throw new GQLException('Failed to update', updated.errors)
      }
      return updated.data && updateAccessor(updated.data)
    } else {
      const created = await runQuery<TCreate>({
        query: createQuery,
        variables: { input },
      })
      if (created.errors) {
        throw new GQLException('Failed to create', created.errors)
      }
      return created.data && createAccessor(created.data)
    }
  }
  return {
    upsertDeployment: upsert({
      getQuery: getDeployment,
      createQuery: createDeployment,
      updateQuery: updateDeployment,

      exists: (x: GetDeploymentQuery) => Boolean(x.getDeployment),

      keyAccessor: (x: CreateDeploymentInput) => ({ id: x.id }),
      createAccessor: (x: CreateDeploymentMutation) => x.createDeployment,
      updateAccessor: (x: UpdateDeploymentMutation) => x.updateDeployment,
    }),
    upsertDeploymentVersion: upsert({
      getQuery: getDeploymentVersion,
      createQuery: createDeploymentVersion,
      updateQuery: updateDeploymentVersion,

      exists: (x: GetDeploymentVersionQuery) => Boolean(x.getDeploymentVersion),

      keyAccessor: (x: CreateDeploymentVersionInput) => ({
        versionId: x.versionId,
      }),
      createAccessor: (x: CreateDeploymentVersionMutation) =>
        x.createDeploymentVersion,
      updateAccessor: (x: UpdateDeploymentVersionMutation) =>
        x.updateDeploymentVersion,
    }),
  }
}
