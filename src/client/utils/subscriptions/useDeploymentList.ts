import gql from 'graphql-tag'
import { useSubscription } from '@apollo/react-hooks'
import { Right, Left, Either } from 'data.either'
import { ApolloError } from 'apollo-client'
import { Deployment } from 'gql/customTypes'

const LIST_DEPLOYMENTS = gql`
  subscription DeploymentList($filter: String) {
    deployments(
      where: { display_name: { _like: $filter } }
      order_by: { last_deployment_timestamp: desc }
    ) {
      id
      db_migration_image
      deployer_role
      deployment_type
      description
      display_name
      env
      hyperlinks
      last_deployment_timestamp
      countAggregate: deployment_versions_aggregate(distinct_on: id) {
        aggregate {
          count
        }
      }
      branchAggregate: deployment_versions_aggregate(distinct_on: git_branch) {
        aggregate {
          count
        }
      }
    }
  }
`

export interface DeploymentListItem extends Deployment {
  countAggregate: {
    aggregate: {
      count: number
    }
  }
  branchAggregate: {
    aggregate: {
      count: number
    }
  }
}

export const useDeploymentList = (
  filter?: string
): Either<string | ApolloError, DeploymentListItem[]> => {
  const result = useSubscription(LIST_DEPLOYMENTS, {
    variables: { filter: filter ? `%${filter}%` : undefined },
  })

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
