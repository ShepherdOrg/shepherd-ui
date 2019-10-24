import { useState, useCallback, useReducer } from 'react'
import Auth, { CognitoUser } from '@aws-amplify/auth'
import * as R from 'ramda'
interface LoginState {
  username: string
  password: string
  challengeType: string
  twofactorCode: string
  user: CognitoUser | null
}
const loginReducer = (
  state: LoginState,
  action: (value: LoginState) => LoginState
) => {
  return action(state)
}

const assocFromEvent = (
  prop: string,
  dispatch: (fn: (a: any) => any) => void
) =>
  R.compose(
    dispatch,
    R.assoc(prop),
    R.path(['currentTarget', 'value'])
  )

export const Login = function({ onSignin }: { onSignin: () => void }) {
  const [loginState, dispatch] = useReducer(loginReducer, {
    username: '',
    password: '',
    challengeType: '',
    twofactorCode: '',
    user: null,
  })

  const signIn = useCallback(async () => {
    const { username, password } = loginState
    const user = await Auth.signIn({
      username,
      password,
    })

    if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
    }

    onSignin()
  }, [loginState, onSignin])
  return (
    <>
      <ul>
        <li>
          <input
            type="text"
            onChange={assocFromEvent('username', dispatch)}
            placeholder="username"
          />
        </li>
        <li>
          <input
            type="password"
            onChange={assocFromEvent('password', dispatch)}
            placeholder="password"
          />
        </li>
      </ul>
      <button onClick={signIn}>Sign in!</button>
    </>
  )
}
