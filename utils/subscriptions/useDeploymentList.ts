import gql from 'graphql-tag'
import { useSubscription } from '@apollo/react-hooks'
import { Right, Left, Either } from 'data.either'
import { ApolloError } from 'apollo-client'
import { GQLdeployments } from 'gql/apiTypes'

const LIST_DEPLOYMENTS = gql`
  subscription {
    deployments {
      id
      db_migration_image
      deployer_role
      deployment_type
      description
      display_name
      env
      hyperlinks
      last_deployment_timestamp
    }
  }
`
export const useDeploymentList = (): Either<
  string | ApolloError,
  GQLdeployments[]
> => {
  const result = useSubscription(LIST_DEPLOYMENTS)

  if (result.data) {
    return Right(result.data.deployments)
  }
  if (result.loading) {
    return Left('loading')
  }
  if (result.error) {
    return Left(result.error)
  }
  return Left('Not found')
}
