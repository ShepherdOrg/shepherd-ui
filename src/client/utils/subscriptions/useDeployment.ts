import gql from 'graphql-tag'
import { useSubscription } from '@apollo/react-hooks'
import { Right, Left, Either } from 'data.either'
import { ApolloError } from 'apollo-client'

import { GQLdeployment_versions_bool_exp } from '@shepherdorg/shepherd-ui-api'
import { Deployment } from 'gql/customTypes'

const GET_DEPLOYMENT = gql`
  subscription GetDeployment(
    $id: String!
    $versionFilter: deployment_versions_bool_exp
  ) {
    deployments_by_pk(id: $id) {
      id
      db_migration_image
      deployer_role
      deployment_type
      description
      display_name
      env
      hyperlinks
      last_deployment_timestamp
      last_deployment_version
      deployment_versions(
        order_by: { deployed_at: desc }
        where: $versionFilter
      ) {
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
      }
    }
  }
`
export const useDeployment = (
  deploymentId: string,
  versionFilter?: GQLdeployment_versions_bool_exp
): Either<string | ApolloError, Deployment> => {
  const result = useSubscription(GET_DEPLOYMENT, {
    variables: { id: deploymentId, versionFilter },
  })

  if (result.data && result.data.deployments_by_pk) {
    return Right(result.data.deployments_by_pk)
  }
  if (result.loading) {
    return Left('loading')
  }
  if (result.error) {
    return Left(result.error)
  }

  return Left('not found')
}
