import React from 'react'
import Head from 'next/head'
import { DeploymentList } from 'components/deploymentList'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Shepherd</title>
        <link rel="icon" href="/favicon.ico?v=3" />
      </Head>
      <main>
        <h1>Shepherd</h1>
        <h3>Deployments</h3>
        <section className="deploymentListContainer">
          <DeploymentList />
        </section>
      </main>

      <style jsx>{`
        h1 {
          font-size: 48px;
        }

        main {
          width: 900px;
          margin: 40px auto 0;
          max-width: 100vw;
        }
      `}</style>
    </div>
  )
}

export default Home
