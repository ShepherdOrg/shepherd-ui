import { ListDeploymentsQuery, OnCreateDeploymentSubscription } from '../API'
import { listDeployments } from '../graphql/queries'
import { onCreateDeployment } from '../graphql/subscriptions'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { useEffect, useState } from 'react'
import { Right, Left, Either } from 'data.either'
import { ApolloError } from 'apollo-client'
// import { useSubscription } from './subscribe'

const LIST_DEPLOYMENTS = gql(listDeployments)

export type DeploymentList = NonNullable<
  NonNullable<ListDeploymentsQuery['listDeployments']>['items']
>
export const useDeploymentList = () => {
  const [deploymentList, setDeploymentList] = useState<
    Either<'loading' | 'Not found' | ApolloError, DeploymentList>
  >(Left('loading'))
  const { subscribeToMore, ...result } = useQuery<ListDeploymentsQuery>(
    LIST_DEPLOYMENTS
  )

  useEffect(() => {
    subscribeToMore<OnCreateDeploymentSubscription>({
      document: gql(onCreateDeployment),
      updateQuery(prev, next) {
        setDeploymentList(l =>
          l.map(list =>
            list.concat([next.subscriptionData.data.onCreateDeployment])
          )
        )
        return prev
      },
    })
  }, [])

  useEffect(() => {
    if (
      result.data &&
      (result.data.listDeployments == null ||
        result.data.listDeployments.items == null)
    ) {
      setDeploymentList(Left('Not found'))
    }
    if (
      result.data &&
      result.data.listDeployments &&
      result.data.listDeployments.items
    ) {
      setDeploymentList(Right(result.data.listDeployments.items))
    } else if (result.error) {
      setDeploymentList(Left(result.error))
    }
  }, [result.data, result.error])

  return deploymentList
}
// useSubscription<ListDeploymentsQuery, OnCreateDeploymentSubscription>({
//   query,
//   subscription,
//   onSubscriptionMsg(prev, next) {
//     if (!(prev.listDeployments && prev.listDeployments.items)) return prev
//     prev.listDeployments.items.push(next.onCreateDeployment)
//     return prev
//   },
// })
