import fetch, { RequestInit } from 'node-fetch'
import tap from 'ramda/src/tap'
import { GraphQLError as GQLErr } from 'graphql'
import {
  GQLdeployment_versions_insert_input,
  GQLdeployment_versions_mutation_response,
  GQLdeployments_insert_input,
  GQLdeployments_mutation_response,
} from '@shepherdorg/shepherd-ui-api'

export interface Hyperlink {
  url: string
  title: string
}

export interface Deployment extends GQLdeployments_insert_input {
  hyperlinks?: Hyperlink[]
}

export interface ConfigurationItem {
  key: string
  value: string
  isSecret: boolean
}

export interface KubernetesFile {
  path: string
  content: string
}

export interface DeploymentVersion extends GQLdeployment_versions_insert_input {
  configuration?: ConfigurationItem[]
  kubernetes_deployment_files?: KubernetesFile[]
}

export interface QueryBody {
  query: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variables?: { [key: string]: any }
}

export interface GqlResponse<T> {
  data?: T
  errors?: ReadonlyArray<GQLErr>
}

export interface Options {
  fetchOptions?: RequestInit
  logger?: typeof console
}

export interface HasuraError {
  extensions: any
  message: string
}

function rejectOnErrors(operationContext: string) {

  return function(response: any) {
    if (response.errors && response.errors.length) {
      const joinedMessage = response.errors.map((hasuraError: HasuraError) => {
        return hasuraError.message
      }).join('\n')
      throw new Error(`In ${operationContext}: ${joinedMessage}`)
    }

    return response
  }
}

export function createClient(
  apiUrl: string,
  { logger = console, fetchOptions = {} }: Options = {},
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const runQuery = <T = any>(body: QueryBody, queryContext: string): Promise<GqlResponse<T>> => {
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
      .then(tap(json => logger.debug('Query response:', JSON.stringify(json))))
      .then(rejectOnErrors(queryContext))
  }

  const upsert = <TInput, TResult>(createQuery: string, queryContext: string) => async (
    input: TInput,
  ) => {
    return runQuery<TResult>({
      query: createQuery,
      variables: { input },
    }, queryContext)
  }
  return {
    upsertDeployment: upsert(`
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
    `, 'upsert deployment'),
    upsertDeploymentVersion: upsert(`
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
    `, 'upsert deployment'),
  }
}
