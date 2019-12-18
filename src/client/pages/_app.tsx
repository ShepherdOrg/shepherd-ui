import App from 'next/app'
import apiClient from 'utils/apiClient'
import { ApolloProvider } from '@apollo/react-hooks'
import Head from 'next/head'
import { darkTheme } from 'utils/colors'
import { useMemo } from 'react'

export default class MyApp extends App {
  // eslint-disable-next-line
  static async getInitialProps(appContext: any) {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext)

    return { ...appProps }
  }
  render() {
    const { Component, pageProps } = this.props
    return <RootComponent Component={Component} pageProps={pageProps} />
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RootComponent = ({ Component, pageProps }: any) => {
  const client = useMemo(() => apiClient(), [])
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Shepherd</title>
        <link rel="icon" href="/favicon.ico?v=3" />
      </Head>
      <Component {...pageProps} />
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        body {
          background: ${darkTheme.background};
          color: ${darkTheme.text};

          margin: 0;
          font-family: 'Helvetica Neue';
          margin-bottom: 200px;
        }
        input,
        textarea {
          background-color: ${darkTheme.inputBackground};
          color: ${darkTheme.text};
        }
      `}</style>
    </ApolloProvider>
  )
}
