import fetch, { RequestInit } from 'node-fetch'
import tap from 'ramda/src/tap'
import { GraphQLError as GQLErr } from 'graphql'
import {
  GQLdeployments_insert_input,
  GQLdeployments_mutation_response,
  GQLdeployment_versions_insert_input,
  GQLdeployment_versions_mutation_response,
} from '../client/gql/apiTypes'

interface QueryBody {
  query: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variables?: { [key: string]: any }
}

interface GqlResponse<T> {
  data?: T
  errors?: ReadonlyArray<GQLErr>
}

interface Options {
  fetchOptions?: RequestInit
  logger?: typeof console
}

export function createClient(
  apiUrl: string,
  { logger = console, fetchOptions = {} }: Options = {}
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  const upsert = <TInput, TResult>(createQuery: string) => async (
    input: TInput
  ) => {
    return runQuery<TResult>({
      query: createQuery,
      variables: { input },
    })
  }
  return {
    upsertDeployment: upsert<
      GQLdeployments_insert_input[],
      GQLdeployments_mutation_response
    >(`
      mutation InsertDeployment($input: [deployments_insert_input!]!) {
        insert_deployments(objects: $input, on_conflict: {
          constraint: deployments_pkey,
          update_columns: [
            db_migration_image,
            deployer_role,
            deployment_type,
            description,
            display_name,
            env,
            hyperlinks,
            last_deployment_timestamp
          ]})
        {
          affected_rows
          returning {
            id
          }
        }
      }
    `),
    upsertDeploymentVersion: upsert<
      GQLdeployment_versions_insert_input[],
      GQLdeployment_versions_mutation_response
    >(`
      mutation InsertDeploymentVersion(
        $input: [deployment_versions_insert_input!]!
      ) {
        insert_deployment_versions(
          objects: $input
          on_conflict: {
            constraint: deployment_versions_pkey
            update_columns: [
              build_host_name
              built_at
              configuration
              deployed_at
              deployment_id
              docker_image
              docker_image_tag
              env
              git_branch
              git_commit
              git_hash
              git_url
              id
              kubernetes_deployment_files
              last_commits
              version
            ]
          }
        ) {
          affected_rows
          returning {
            id
          }
        }
      }
    `),
  }
}
