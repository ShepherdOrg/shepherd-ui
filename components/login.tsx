import { useState, useCallback, useReducer, useEffect } from 'react'
import Auth, { CognitoUser } from '@aws-amplify/auth'
import * as R from 'ramda'
import { colors } from '../src/colors'
interface LoginState {
  currentState: 'LOGIN' | 'NEW_PASSWORD' | 'MFA'
  error: boolean
  username: string
  password: string
  challengeType: 'SMS_MFA' | 'SOFTWARE_TOKEN_MFA' | null | undefined
  mfaCode: string
  newPassword: string
  bottom: boolean
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

const wait = (ms: number) => new Promise(res => setTimeout(res, ms))

export const Login = function({ onSignin }: { onSignin: () => void }) {
  const [loginState, dispatch] = useReducer(loginReducer, {
    username: '',
    password: '',
    newPassword: '',
    currentState: 'LOGIN',
    error: false,
    challengeType: null,
    mfaCode: '',
    user: null,
    bottom: false,
  })

  const completeSignin = useCallback(async () => {
    dispatch(R.assoc('bottom', true))
    await wait(375)
    onSignin()
  }, [])

  useEffect(() => {
    Auth.currentAuthenticatedUser().then(() => completeSignin())
  }, [])

  const handleMFA = useCallback(
    async (ev: { preventDefault: () => void }) => {
      ev.preventDefault()
      if (!loginState.user) return
      const { user, mfaCode, challengeType } = loginState

      await Auth.confirmSignIn(user, mfaCode, challengeType)

      await completeSignin()
    },
    [loginState.user, loginState.mfaCode, loginState.challengeType]
  )

  const handleNewPassword = useCallback(
    async (ev: { preventDefault: () => void }) => {
      ev.preventDefault()
      if (!loginState.user) return
      const { user, newPassword } = loginState

      await Auth.completeNewPassword(user, newPassword, {})
      await completeSignin()
    },
    [loginState.user, loginState.mfaCode, loginState.challengeType]
  )

  const signIn = useCallback(
    async (ev: { preventDefault: () => void }) => {
      ev.preventDefault()
      try {
        const { username, password } = loginState
        const user = await Auth.signIn({
          username,
          password,
        })

        dispatch(R.assoc('user', user))

        if (
          user.challengeName === 'SMS_MFA' ||
          user.challengeName === 'SOFTWARE_TOKEN_MFA'
        ) {
          dispatch(state => ({
            ...state,
            challengeType: user.challengeName,
            currentState: 'MFA',
          }))
          return
        }

        if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
          dispatch(R.assoc('currentState', 'NEW_PASSWORD'))
          return
        }

        await completeSignin()
      } catch (error) {}
    },
    [loginState, onSignin]
  )
  return (
    <main>
      <section className={loginState.bottom ? 'bottom' : ''}>
        <img src="/favicon.svg" />
        <h1>Shepherd</h1>
        {loginState.currentState === 'LOGIN' && (
          <form onSubmit={signIn}>
            <label>
              <span className="sr-only">
                Username:
                <br />
              </span>
              <input
                type="text"
                onChange={assocFromEvent('username', dispatch)}
                placeholder="username"
              />
            </label>
            <label>
              <span className="sr-only">
                Password: <br />
              </span>
              <input
                type="password"
                onChange={assocFromEvent('password', dispatch)}
                placeholder="password"
              />
            </label>
            <button type="submit">Sign in!</button>
          </form>
        )}
        {loginState.currentState === 'MFA' && (
          <form onSubmit={handleMFA}>
            <label>
              <span className="sr-only">
                MFA Code: <br />
              </span>
              <input
                type="text"
                onChange={assocFromEvent('mfaCode', dispatch)}
                placeholder="MFA Code"
              />
            </label>
            <button type="submit">Submit code</button>
          </form>
        )}
        {loginState.currentState === 'NEW_PASSWORD' && (
          <form onSubmit={handleNewPassword}>
            <label>
              <span className="sr-only">
                New password: <br />
              </span>
              <input
                type="password"
                onChange={assocFromEvent('newPassword', dispatch)}
                placeholder="New password"
              />
            </label>
            <button type="submit">Change password</button>
          </form>
        )}
      </section>
      <style jsx>{`
        :global(body) {
          background: ${colors.wet_asphalt};
          color: ${colors.clouds};
          font-family: 'Helvetica Neue';
        }

        .sr-only {
          border: 0 !important;
          clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
          -webkit-clip-path: inset(50%) !important;
          clip-path: inset(50%) !important; /* 2 */
          height: 1px !important;
          margin: -1px !important;
          overflow: hidden !important;
          padding: 0 !important;
          position: absolute !important;
          width: 1px !important;
          white-space: nowrap !important; /* 3 */
        }

        main {
          display: flex;
          min-height: 100vh;
          min-width: 100vw;
          max-width: 100vw;
          align-items: center;
          justify-content: center;
        }
        section {
          border-radius: 12px;
          padding: 16px;
          background: ${colors.clouds};
          color: ${colors.midnight_blue};
          justify-content: center;
          display: flex;
          flex-flow: column;
          box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
          transition: margin-top 0.375s ease-out;
        }

        section.bottom {
          margin-top: 100vh;
        }
        label {
          display: flex;
        }
        input {
          flex-grow: 1;
          appearance: none;
          width: auto;
          padding: 0.7em;
          margin-bottom: 20px;

          background-color: white;
          border: 2px solid transparent;
          border-radius: 12px;
          box-shadow: none;

          font-family: 'Helvetica Neue';
          font-size: 20px;
          font-weight: 600;
          color: ${colors.midnight_blue};
          caret-color: ${colors.midnight_blue};
          transition: border-color 0.2s;
        }
        h1 {
          margin: 16px 0;
          text-align: center;
        }

        button {
          appearance: none;
          font-size: 20px;
          font-weight: 600;
          padding: 0.7em;
          border: 0;
          border-radius: 12px;
          width: 100%;
          background: ${colors.turquoise};
          color: white;
          transition: all 0.2s ease-out;
        }
        button:hover {
          background: #48c9b0;
          cursor: pointer;
        }
      `}</style>
    </main>
  )
}
