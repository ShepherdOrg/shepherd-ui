import gql from 'graphql-tag'
import { useSubscription } from '@apollo/react-hooks'
import { ApolloError } from 'apollo-client'
import { Either, Right, Left } from 'data.either'
import { GQLdeployment_versions } from '@shepherdorg/hasura'

const GET_DEPLOYMENT_VERSION = gql`
  subscription GetDeploymentVersion($id: String!) {
    deployment_versions_by_pk(id: $id) {
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
`

export const useDeploymentVersion = (
  version: string
): Either<string | ApolloError, GQLdeployment_versions> => {
  const result = useSubscription(GET_DEPLOYMENT_VERSION, {
    variables: { id: version },
  })

  if (result.data && result.data.deployment_versions_by_pk) {
    return Right(result.data.deployment_versions_by_pk)
  }
  if (result.loading) {
    return Left('loading')
  }
  if (result.error) {
    return Left(result.error)
  }
  return Left('Not found')
}
