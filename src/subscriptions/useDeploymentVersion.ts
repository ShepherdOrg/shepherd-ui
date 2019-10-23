import { useSubscription } from './subscribe'
import {
  GetDeploymentVersionQuery,
  OnUpdateDeploymentVersionSubscription,
} from '../API'
import { useMemo, useEffect, useState } from 'react'
import gql from 'graphql-tag'
import { getDeploymentVersion } from '../graphql/queries'
import { onUpdateDeploymentVersion } from '../graphql/subscriptions'
import { useQuery } from '@apollo/react-hooks'
import { ApolloError } from 'apollo-client'
import { Either, Right, Left } from 'data.either'

const GET_DEPLOYMENT_VERSION = gql(getDeploymentVersion)

export interface DeploymentVersion
  extends NonNullable<GetDeploymentVersionQuery['getDeploymentVersion']> {}

export const useDeploymentVersion = (version: string) => {
  const [deploymentVersion, setDeploymentVersion] = useState<
    Either<'loading' | 'Not found' | ApolloError, DeploymentVersion>
  >(Left('loading'))
  const { subscribeToMore, ...result } = useQuery<GetDeploymentVersionQuery>(
    GET_DEPLOYMENT_VERSION,
    { variables: { versionId: version } }
  )

  useEffect(() => {
    subscribeToMore<OnUpdateDeploymentVersionSubscription>({
      document: gql(onUpdateDeploymentVersion),
      updateQuery(prev, next) {
        if (next.subscriptionData.data.onUpdateDeploymentVersion) {
          setDeploymentVersion(
            Right(next.subscriptionData.data.onUpdateDeploymentVersion)
          )
        }
        return prev
      },
    })
  }, [])

  useEffect(() => {
    if (result.data && result.data.getDeploymentVersion) {
      setDeploymentVersion(Right(result.data.getDeploymentVersion))
    } else if (result.error) {
      setDeploymentVersion(Left(result.error))
    }
  }, [result.data, result.error])

  return deploymentVersion
}
