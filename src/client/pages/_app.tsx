import App from 'next/app'
import apiClient from 'utils/apiClient'
import { ApolloProvider } from '@apollo/react-hooks'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <RootComponent Component={Component} pageProps={pageProps} />
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RootComponent = ({ Component, pageProps }: any) => {
  const client = apiClient()

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
