import React, { useEffect, useCallback } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import { DeploymentList } from '../components/deploymentList'
import { Sidebar } from '../components/sidebar'
import { colors } from '../src/colors'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Shepherd</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Shepherd</h1>
        <h3>Deployments</h3>
        <section className="deploymentListContainer">
          <DeploymentList />
        </section>
      </main>

      <style jsx>{`
        :global(body) {
          background: ${colors.midnight_blue};
          color: ${colors.cloud};
        }
        :global(*) {
          font-family: 'Helvetica Neue';
        }

        h1 {
          font-size: 48px;
        }

        .deploymentListContainer {
          background: ${colors.concrete};
          padding: 8px;
          border-radius 12px;
        }
        main {
          width: 800px;
          margin: 40px auto 0;
          max-width: 100vw;
        }
      `}</style>
    </div>
  )
}

export default Home
