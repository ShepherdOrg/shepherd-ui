import App from 'next/app'
import apiClient from '../src/apiClient'
import { ApolloProvider } from '@apollo/react-hooks'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const client = apiClient()
    return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }
}
