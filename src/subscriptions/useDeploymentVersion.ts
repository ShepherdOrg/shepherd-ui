import { useSubscription } from './subscribe'
import {
  GetDeploymentVersionQuery,
  OnUpdateDeploymentVersionSubscription,
} from '../API'
import { useMemo } from 'react'
import gql from 'graphql-tag'
import { getDeploymentVersion } from '../graphql/queries'
import { onUpdateDeploymentVersion } from '../graphql/subscriptions'

export const useDeploymentVersion = (version: string) =>
  useSubscription<
    GetDeploymentVersionQuery,
    OnUpdateDeploymentVersionSubscription
  >({
    run: Boolean(version),
    query: useMemo(
      () => ({
        query: gql(getDeploymentVersion),
        variables: { versionId: version },
      }),
      [version]
    ),
    subscription: useMemo(
      () => ({
        query: gql(onUpdateDeploymentVersion),
        variables: { versionId: version },
      }),
      [version]
    ),
    onSubscriptionMsg: (prev, next) => {
      if (prev.getDeploymentVersion) {
        prev.getDeploymentVersion = {
          ...prev.getDeploymentVersion,
          ...next.onUpdateDeploymentVersion,
        }
      }
      return prev
    },
  })
