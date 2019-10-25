import 'cross-fetch/polyfill'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'

let client: ApolloClient<NormalizedCacheObject>

export default () => {
  if (!client) {
    let link = createHttpLink({
      uri: 'http://localhost:8080/v1/graphql',
    })

    if (typeof WebSocket !== 'undefined') {
      link = new WebSocketLink({
        uri: process.env.HASURA_ENDPOINT_URL || '',
        options: {
          reconnect: true,
          lazy: true,
        },
      })
    }

    client = new ApolloClient({
      link,
      cache: new InMemoryCache(),
    })
  }
  return client
}
