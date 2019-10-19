import { useSubscription } from '../src/subscriptions/subscribe'
import { listShepherdMetadatas } from '../src/graphql/queries'
import { onCreateShepherdMetadata } from '../src/graphql/subscriptions'
import {
  ListShepherdMetadatasQuery,
  OnCreateShepherdMetadataSubscription,
} from '../src/API'
import gql from 'graphql-tag'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const query = {
  query: gql(listShepherdMetadatas),
}
const subscription = {
  query: gql(onCreateShepherdMetadata),
}

export const DeploymentList = function() {
  const result = useSubscription<
    ListShepherdMetadatasQuery,
    OnCreateShepherdMetadataSubscription
  >({
    query,
    subscription,
    onSubscriptionMsg(prev, next) {
      if (!(prev.listShepherdMetadatas && prev.listShepherdMetadatas.items))
        return prev
      prev.listShepherdMetadatas.items.push(next.onCreateShepherdMetadata)
      return prev
    },
  })

  if (result.loading) return <h1>Loading...</h1>
  if ('error' in result) return <h1>Error!</h1>
  if (
    !(
      result.data.listShepherdMetadatas &&
      result.data.listShepherdMetadatas.items
    )
  ) {
    return <ul></ul>
  }
  return (
    <ul>
      <li key="head" className="header">
        <div className="name">Deployment Name</div>
        <div className="deploymentType">Type</div>
        <div className="time">Time</div>
      </li>
      {result.data.listShepherdMetadatas.items.map(
        x =>
          x && (
            <li key={x.id}>
              <div className="name">{x.displayName || x.id}</div>
              <div className="deploymentType">{x.deploymentType}</div>
              <div className="time">
                {formatDistanceToNow(new Date(x.lastDeploymentTimestamp))} ago
              </div>
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
        li {
          display: grid;
          grid-column-gap: 16px;
          grid-template-columns: 1fr 1fr 1fr;
          padding 8px;
        }
      `}</style>
    </ul>
  )
}
