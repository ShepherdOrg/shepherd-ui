import { useSubscription } from './subscribe'
import { GetDeploymentQuery, OnUpdateDeploymentSubscription } from '../API'
import { useMemo } from 'react'
import { getDeployment } from '../graphql/queries'
import { onUpdateDeployment } from '../graphql/subscriptions'
import gql from 'graphql-tag'

export const useDeployment = (deploymentId: string) =>
  useSubscription<GetDeploymentQuery, OnUpdateDeploymentSubscription>({
    run: Boolean(deploymentId),
    query: useMemo(
      () => ({ query: gql(getDeployment), variables: { id: deploymentId } }),
      [deploymentId]
    ),
    subscription: useMemo(
      () => ({
        query: gql(onUpdateDeployment),
        variables: { id: deploymentId },
      }),
      [deploymentId]
    ),
    onSubscriptionMsg: (previous, next) => {
      if (previous.getDeployment) {
        previous.getDeployment = {
          ...previous.getDeployment,
          ...next.onUpdateDeployment,
        }
      }
      return previous
    },
  })
