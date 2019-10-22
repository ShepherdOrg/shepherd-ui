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
}

export function createClient(apiUrl: string, fetchOptions: RequestInit = {}) {
  const runQuery = <T = any>(body: QueryBody): Promise<GqlResponse<T>> => {
    console.log(
      JSON.stringify({ message: 'sending graphql request', body, fetchOptions })
    )
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
      .then(tap(x => console.log(JSON.stringify(x))))
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
      return updated.data && updateAccessor(updated.data)
    } else {
      const created = await runQuery<TCreate>({
        query: createQuery,
        variables: { input },
      })
      return created.data && createAccessor(created.data)
    }
  }
  return {
    createDeployment: upsert({
      getQuery: getDeployment,
      createQuery: createDeployment,
      updateQuery: updateDeployment,

      exists: (x: GetDeploymentQuery) => Boolean(x.getDeployment),

      keyAccessor: (x: CreateDeploymentInput) => ({ id: x.id }),
      createAccessor: (x: CreateDeploymentMutation) => x.createDeployment,
      updateAccessor: (x: UpdateDeploymentMutation) => x.updateDeployment,
    }),
    createDeploymentVersion: upsert({
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
