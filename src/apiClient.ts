import 'cross-fetch/polyfill'
import awsconfig from './aws-exports'
import { createAppSyncLink, AUTH_TYPE } from 'aws-appsync/lib/client'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import Auth, { CognitoUser } from '@aws-amplify/auth'

let client: ApolloClient<NormalizedCacheObject>

export default (token: string) => {
  if (!client) {
    const httpLink = createHttpLink({
      uri: awsconfig.aws_appsync_graphqlEndpoint,
      headers: { Authorization: token },
    })

    const awsLink = createAppSyncLink({
      url: awsconfig.aws_appsync_graphqlEndpoint,
      region: awsconfig.aws_appsync_region,
      auth: {
        type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS as const,
        jwtToken: token,
      },
      complexObjectsCredentials: () => null,
    })

    client = new ApolloClient({
      link: awsLink.concat(httpLink),
      cache: new InMemoryCache(),
    })
  }
  return client
}
