import 'cross-fetch/polyfill'
import awsconfig from './aws-exports'
import { createAppSyncLink, AUTH_TYPE } from 'aws-appsync/lib/client'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'

let client: ApolloClient<NormalizedCacheObject>

export default () => {
  if (!client) {
    const httpLink = createHttpLink({
      uri: awsconfig.aws_appsync_graphqlEndpoint,
      headers: { 'X-Api-Key': awsconfig.aws_appsync_apiKey },
    })

    const awsLink = createAppSyncLink({
      url: awsconfig.aws_appsync_graphqlEndpoint,
      region: awsconfig.aws_appsync_region,
      auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: awsconfig.aws_appsync_apiKey,
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
