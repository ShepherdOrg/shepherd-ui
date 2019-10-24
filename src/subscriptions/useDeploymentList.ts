import {
  ListDeploymentsQuery,
  OnCreateDeploymentSubscription,
  OnDeleteDeploymentSubscription,
  OnUpdateDeploymentSubscription,
} from '../API'
import { listDeployments } from '../graphql/queries'
import {
  onCreateDeployment,
  onDeleteDeployment,
  onUpdateDeployment,
} from '../graphql/subscriptions'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { useEffect, useState } from 'react'
import { Right, Left, Either } from 'data.either'
import { ApolloError } from 'apollo-client'

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
    subscribeToMore<OnDeleteDeploymentSubscription>({
      document: gql(onDeleteDeployment),
      updateQuery(prev, next) {
        const deletedId =
          next.subscriptionData.data.onDeleteDeployment &&
          next.subscriptionData.data.onDeleteDeployment.id
        setDeploymentList(l =>
          l.map(list => list.filter(x => x && x.id !== deletedId))
        )
        return prev
      },
    })
    subscribeToMore<OnUpdateDeploymentSubscription>({
      document: gql(onUpdateDeployment),
      updateQuery(prev, next) {
        const updated = next.subscriptionData.data.onUpdateDeployment!
        setDeploymentList(l =>
          l.map(list => list.map(x => (x && x.id === updated.id ? updated : x)))
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
