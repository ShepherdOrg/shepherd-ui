import { useState, useCallback } from 'react'
import Auth from '@aws-amplify/auth'

export const Login = function({ onSignin }: { onSignin: () => void }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const signIn = useCallback(() => {
    Auth.signIn({
      username,
      password,
    }).then(onSignin)
  }, [username, password, onSignin])
  return (
    <>
      <ul>
        <li>
          <input
            type="text"
            onChange={ev => setUsername(ev.currentTarget.value)}
            placeholder="username"
          />
        </li>
        <li>
          <input
            type="password"
            onChange={ev => setPassword(ev.currentTarget.value)}
            placeholder="password"
          />
        </li>
      </ul>
      <button onClick={signIn}>Sign in!</button>
    </>
  )
}
