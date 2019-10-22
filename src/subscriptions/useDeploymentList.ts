import { ListDeploymentsQuery, OnCreateDeploymentSubscription } from '../API'
import { listDeployments } from '../graphql/queries'
import { onCreateDeployment } from '../graphql/subscriptions'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { useEffect } from 'react'
import { Right, Left, Either } from 'data.either'
// import { useSubscription } from './subscribe'

const LIST_DEPLOYMENTS = gql(listDeployments)

type DeploymentList = NonNullable<
  NonNullable<ListDeploymentsQuery['listDeployments']>['items']
>
export const useDeploymentList = () => {
  const { subscribeToMore, ...result } = useQuery<ListDeploymentsQuery>(
    LIST_DEPLOYMENTS
  )

  useEffect(() => {
    subscribeToMore<OnCreateDeploymentSubscription>({
      document: gql(onCreateDeployment),
      updateQuery(prev, next) {
        if (prev.listDeployments && prev.listDeployments.items) {
          prev.listDeployments.items.push(
            next.subscriptionData.data.onCreateDeployment
          )
        }
        return prev
      },
    })
  }, [])

  return {
    result,
    asEither: (): Either<typeof result, DeploymentList> =>
      result.data &&
      result.data.listDeployments &&
      result.data.listDeployments.items
        ? Right(result.data.listDeployments.items)
        : Left(result),
  }
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
