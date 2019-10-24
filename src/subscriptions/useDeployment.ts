import { GetDeploymentQuery, OnUpdateDeploymentSubscription } from '../API'
import { useEffect, useState } from 'react'
import { getDeployment } from '../graphql/queries'
import { onUpdateDeployment } from '../graphql/subscriptions'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { Right, Left, Either } from 'data.either'
import { ApolloError } from 'apollo-client'

const GET_DEPLOYMENT = gql`
  query GetDeployment($id: ID!) {
    getDeployment(id: $id) {
      id
      displayName
      description
      deploymentType
      deployerRole
      dbMigrationImage
      hyperlinks {
        title
        url
      }
      lastDeploymentTimestamp
      env
      versions(sortDirection: DESC) {
        items {
          versionId
          version
          env
          deployedAt
          builtAt
          lastCommits
          gitUrl
          gitBranch
          gitHash
          gitCommit
          dockerImage
          dockerImageTag
          buildHostName
        }
        nextToken
      }
    }
  }
`

export interface Deployment
  extends NonNullable<GetDeploymentQuery['getDeployment']> {}

export const useDeployment = (deploymentId: string) => {
  const [deployment, setDeployment] = useState<
    Either<'loading' | 'Not found' | ApolloError, Deployment>
  >(Left('loading'))
  const { subscribeToMore, ...result } = useQuery<GetDeploymentQuery>(
    GET_DEPLOYMENT,
    { variables: { id: deploymentId } }
  )

  useEffect(() => {
    subscribeToMore<OnUpdateDeploymentSubscription>({
      document: gql(onUpdateDeployment),
      updateQuery(prev, next) {
        if (next.subscriptionData.data.onUpdateDeployment) {
          setDeployment(Right(next.subscriptionData.data.onUpdateDeployment))
        }
        return prev
      },
    })
  }, [])

  useEffect(() => {
    if (result.data && result.data.getDeployment) {
      setDeployment(Right(result.data.getDeployment))
    } else if (result.error) {
      setDeployment(Left(result.error))
    }
  }, [result.data, result.error])

  return deployment
}
