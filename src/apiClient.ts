// import 'cross-fetch/polyfill'
import awsconfig from './aws-exports'
import ApolloClient, { NormalizedCacheObject } from 'apollo-boost'

let client: ApolloClient<NormalizedCacheObject>

export default () => {
  if (!client) {
    client = new ApolloClient({
      uri: awsconfig.aws_appsync_graphqlEndpoint,
      credentials: 'same-origin',
      headers: {
        'X-Api-Key': awsconfig.aws_appsync_apiKey,
      },
    })
  }
  return client
}
