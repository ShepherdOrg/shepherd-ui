import gql from 'graphql-tag'
import { useSubscription } from '@apollo/react-hooks'
import { Right, Left, Either } from 'data.either'
import { ApolloError } from 'apollo-client'

import { GQLdeployments } from '@shepherdorg/shepherd-ui-api'

const GET_DEPLOYMENT = gql`
  subscription GetDeployment($id: String!) {
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
      deployment_versions(order_by: { deployed_at: desc }) {
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
  deploymentId: string
): Either<string | ApolloError, GQLdeployments> => {
  const result = useSubscription(GET_DEPLOYMENT, {
    variables: { id: deploymentId },
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
