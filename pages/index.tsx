import React, { useMemo } from 'react'
import Head from 'next/head'
import { DeploymentList } from '../components/deploymentList'
import { colors } from '../src/colors'
import { usePageTransition } from '../utils/usePageTransition'
import { Curtain } from '../components/curtain'
import apiClient from '../src/apiClient'
import { ApolloProvider } from '@apollo/react-hooks'

const Home = () => {
  const { entering, leaving } = usePageTransition()
  const client = useMemo(() => apiClient(), [])
  return (
    <ApolloProvider client={client}>
      <div>
        <Head>
          <title>Shepherd</title>
          <link rel="icon" href="/favicon.ico?v=3" />
        </Head>
        <Curtain visible={entering || leaving} />
        <main>
          <h1>Shepherd</h1>
          <h3>Deployments</h3>
          <section className="deploymentListContainer">
            <DeploymentList />
          </section>
        </main>

        <style jsx>{`
          :global(body) {
            background: ${colors.wet_asphalt};
            color: ${colors.white};
          }
          :global(*) {
            font-family: 'Helvetica Neue';
          }

          h1 {
            font-size: 48px;
          }

          main {
            width: 800px;
            margin: 40px auto 0;
            max-width: 100vw;
          }
        `}</style>
      </div>
    </ApolloProvider>
  )
}

export default Home
