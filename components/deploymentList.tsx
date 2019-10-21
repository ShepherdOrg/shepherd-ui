import { useSubscription } from '../src/subscriptions/subscribe'
import gql from 'graphql-tag'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Link from 'next/link'
import { listDeployments } from '../src/graphql/queries'
import { onCreateDeployment } from '../src/graphql/subscriptions'
import {
  ListDeploymentsQuery,
  OnCreateDeploymentSubscription,
} from '../src/API'

const query = {
  query: gql(listDeployments),
}
const subscription = {
  query: gql(onCreateDeployment),
}

export const DeploymentList = function() {
  const result = useSubscription<
    ListDeploymentsQuery,
    OnCreateDeploymentSubscription
  >({
    query,
    subscription,
    onSubscriptionMsg(prev, next) {
      if (!(prev.listDeployments && prev.listDeployments.items)) return prev
      prev.listDeployments.items.push(next.onCreateDeployment)
      return prev
    },
  })

  if (result.loading) return <h1>Loading...</h1>
  if ('error' in result) return <h1>Error!</h1>
  if (!(result.data.listDeployments && result.data.listDeployments.items)) {
    return <ul></ul>
  }
  return (
    <ul>
      <li key="head" className="header">
        <div className="name">Deployment Name</div>
        <div className="deploymentType">Type</div>
        <div className="time">Time</div>
      </li>
      {result.data.listDeployments.items.map(
        x =>
          x && (
            <li key={x.id} className="item">
              <Link href={`/deployment/${x.id}`}>
                <a href={`/deployment/${x.id}`}>
                  <div className="name">{x.displayName || x.id}</div>
                  <div className="deploymentType">{x.deploymentType}</div>
                  <div className="time">
                    {formatDistanceToNow(new Date(x.lastDeploymentTimestamp))}{' '}
                    ago
                  </div>
                </a>
              </Link>
            </li>
          )
      )}
      <style jsx>{`
        .header {
          font-weight: 600;
        }
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        li.header, li.item > a {
          display: grid;
          grid-column-gap: 16px;
          grid-template-columns: 1fr 1fr 1fr;
          padding 8px;
        }

        li.item > a {
          text-decoration: none;
          border-radius: 12px;
          color: #333;
        }

        li.item:nth-child(2n) > a {
          background: #efefef;
        }

        li.item > a:hover {
          background: #eee;
          color: #00f;
        }
      `}</style>
    </ul>
  )
}
