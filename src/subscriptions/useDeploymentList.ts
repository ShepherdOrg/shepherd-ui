import { ListDeploymentsQuery, OnCreateDeploymentSubscription } from '../API'
import { listDeployments } from '../graphql/queries'
import { onCreateDeployment } from '../graphql/subscriptions'
import gql from 'graphql-tag'
import { useSubscription } from './subscribe'
const query = {
  query: gql(listDeployments),
}
const subscription = {
  query: gql(onCreateDeployment),
}

export const useDeploymentList = () =>
  useSubscription<ListDeploymentsQuery, OnCreateDeploymentSubscription>({
    query,
    subscription,
    onSubscriptionMsg(prev, next) {
      if (!(prev.listDeployments && prev.listDeployments.items)) return prev
      prev.listDeployments.items.push(next.onCreateDeployment)
      return prev
    },
  })
