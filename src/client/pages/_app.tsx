import App from 'next/app'
import apiClient from 'utils/apiClient'
import { ApolloProvider } from '@apollo/react-hooks'
import Head from 'next/head'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <RootComponent Component={Component} pageProps={pageProps} />
  }

  // eslint-disable-next-line
  static async getInitialProps(appContext: any) {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext)

    return { ...appProps }
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RootComponent = ({ Component, pageProps }: any) => {
  const client = apiClient()

  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Shepherd</title>
        <link rel="icon" href="/favicon.ico?v=3" />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
