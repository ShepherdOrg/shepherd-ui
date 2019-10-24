import App from 'next/app'
import apiClient from 'utils/apiClient'
import { ApolloProvider } from '@apollo/react-hooks'
import Auth, { CognitoUser } from '@aws-amplify/auth'
import { useState, useEffect, useCallback } from 'react'
import { Login } from 'components/login'
import { CognitoUserSession } from 'amazon-cognito-identity-js'

// if (process.env.NODE_ENV === 'production') {
Auth.configure({
  // REQUIRED - Amazon Cognito Region
  region: process.env.COGNITO_REGION,

  // OPTIONAL - Amazon Cognito User Pool ID
  userPoolId: process.env.COGNITO_USER_POOL_ID,

  // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
  userPoolWebClientId: process.env.COGNITO_WEB_CLIENT_ID,

  // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
  mandatorySignIn: true,

  // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
  authenticationFlowType: 'USER_PASSWORD_AUTH',
})
// }

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <RootComponent Component={Component} pageProps={pageProps} />
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RootComponent = ({ Component, pageProps }: any) => {
  const [currentSession, setCurrentSession] = useState<
    CognitoUserSession | undefined
  >(undefined)

  const checkAuthenticated = useCallback(async () => {
    const user = await Auth.currentSession()
    setCurrentSession(user)
  }, [])
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      checkAuthenticated()
    }
  }, [])
  if (!currentSession || !currentSession.isValid()) {
    return <Login onSignin={checkAuthenticated} />
  }
  const client = apiClient(currentSession.getAccessToken().getJwtToken())

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
