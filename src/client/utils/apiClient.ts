import 'cross-fetch/polyfill'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import getConfig from 'next/config'

let client: ApolloClient<NormalizedCacheObject>

const { publicRuntimeConfig } = getConfig()

export default () => {
  if (!client) {
    let link = createHttpLink({
      uri: 'http://localhost:8080/v1/graphql',
    })

    if (typeof WebSocket !== 'undefined') {
      const HASURA_ENDPOINT_URL =
        (publicRuntimeConfig && publicRuntimeConfig.HASURA_ENDPOINT_URL) || ''
      console.log('Connecting to websocket hasura at ' + HASURA_ENDPOINT_URL)
      link = new WebSocketLink({
        uri: HASURA_ENDPOINT_URL || '',
        options: {
          reconnect: true,
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
