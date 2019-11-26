import gql from 'graphql-tag'
import { useSubscription } from '@apollo/react-hooks'
import { Right, Left, Either } from 'data.either'
import { ApolloError } from 'apollo-client'
import { Deployment, Href } from 'gql/customTypes'
import {
  GQLdeployments,
  GQLdeploymentsTypeResolver,
  query_rootToDeploymentsResolver, subscription_rootToDeploymentsResolver,
} from '@shepherdorg/shepherd-ui-api'

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
      herd_key
      last_deployment_timestamp
      last_deployment_version
      latest_version: deployment_versions_aggregate {
        aggregate {
          max {
            version
          }
        }
      }
    }
  }
`

export interface DeploymentListItem extends Deployment {
}

// export type EnvDeploymentMap ={
//   [env: string] : DeploymentListItem
// }

export interface GroupedDeploymentListItem {
  display_name: string;
  herd_key?: string;
  hyperlinks: Href[]
  deployer_role: string;
  deployment_type: string;

  envDeployments: DeploymentListItem[]
}

var groupBy = function<TItem>(dataArray:TItem[], dataKey:string):{[key:string]:TItem[]} {
  return dataArray.reduce(function(resultingGroup, dataRow) {
    // @ts-ignore
    (resultingGroup[dataRow[dataKey]] = resultingGroup[dataRow[dataKey]] || []).push(dataRow);
    return resultingGroup;
  }, {});
};

function groupProdAndDev(deployments: DeploymentListItem[] ) : GroupedDeploymentListItem[] {
  const groupedObj = Object.entries(groupBy(deployments,'herd_key')).map(([herdKey, deploymentsUnderKey])=>{
    const result: GroupedDeploymentListItem = {
      herd_key: herdKey,
      deployer_role: deploymentsUnderKey[0].deployer_role,
      deployment_type: deploymentsUnderKey[0].deployment_type,
      display_name: deploymentsUnderKey[0].display_name,
      hyperlinks: deploymentsUnderKey[0].hyperlinks,
      envDeployments: deploymentsUnderKey
    }
    return result
  })
  return groupedObj
}

export const useDeploymentList = (
  filter?: string
): Either<string | ApolloError, GroupedDeploymentListItem[]> => {
  const result = useSubscription(LIST_DEPLOYMENTS, {
    variables: { filter: filter ? `%${filter}%` : undefined },
  })

  if (result.data) {
    return Right(groupProdAndDev(result.data.deployments))
  }
  if (result.loading) {
    return Left('loading')
  }
  if (result.error) {
    return Left(result.error)
  }
  return Left('Not found')
}
