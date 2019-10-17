import React, { useEffect, useCallback } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Amplify, { graphqlOperation } from 'aws-amplify'
import awsconfig from '../src/aws-exports'
import { listShepherdMetadatas } from '../src/graphql/queries'
import { CreateShepherdMetadataInput, DeploymentType } from '../src/API'
import { createShepherdMetadata } from '../src/graphql/mutations'
import Connect from 'aws-amplify-react/dist/API/GraphQl/Connect'
import {
  onUpdateShepherdMetadata,
  onCreateShepherdMetadata,
} from '../src/graphql/subscriptions'

Amplify.configure(awsconfig)
const Home = () => {
  const createMetadata = useCallback(async () => {
    const metadata: CreateShepherdMetadataInput = {
      displayName: 'My deployment 2',
      deploymentType: DeploymentType.Kubernetes,
      lastCommits: '25abfff 25abff1 25abffc 25abffc afcdea'
        .split(' ')
        .join('\n'),
      gitUrl: 'https://gitlab.tm.is/tmdev/my-deployment',
      gitHash: '1e35602dc15d8b62f7383494ad058ef1305d1ca6',
      buildDate: '2019-09-27T14:40:31.000Z',
      dockerImageTag: 'latest',
      buildHostName: 'isrvkbuild02',
    }

    await Amplify.API.graphql(
      graphqlOperation(createShepherdMetadata, { input: metadata })
    )
  }, [])
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <button onClick={createMetadata}>CREATE NEW METADATA</button>

      <div className="hero">
        <h1 className="title">Welcome to Next.js!</h1>
        <p className="description">
          To get started, edit <code>pages/index.js</code> and save to reload.
        </p>

        <div className="row">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Learn more about Next.js in the documentation.</p>
          </a>
          <a href="https://nextjs.org/learn" className="card">
            <h3>Next.js Learn &rarr;</h3>
            <p>Learn about Next.js by following an interactive tutorial!</p>
          </a>
          <a
            href="https://github.com/zeit/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Find other example boilerplates on the Next.js GitHub.</p>
          </a>
        </div>
      </div>

      <div className="hero">
        <Connect
          query={graphqlOperation(listShepherdMetadatas)}
          subscription={graphqlOperation(onCreateShepherdMetadata)}
          // @ts-ignore
          onSubscriptionMsg={(previous, { onCreateShepherdMetadata }) => {
            previous.listShepherdMetadatas.items.push(onCreateShepherdMetadata)
            return previous
          }}
        >
          {({ data: { listShepherdMetadatas }, loading, error }) => {
            if (error) return <h3>Error</h3>
            if (loading) return <h3>Loading...</h3>
            return (
              <ul>
                {listShepherdMetadatas.items.map(x => (
                  <li key={x.displayName}>{x.displayName}</li>
                ))}
              </ul>
            )
          }}
        </Connect>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  )
}

export default Home
