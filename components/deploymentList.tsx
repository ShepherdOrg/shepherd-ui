import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Link from 'next/link'
import { useDeploymentList } from '../src/subscriptions/useDeploymentList'
import { colors } from '../src/colors'

export const DeploymentList = function() {
  const result = useDeploymentList()

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
              <Link href={`/deployment?id=${x.id}`}>
                <a href={`/deployment?id=${x.id}`}>
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

        li.item {
          margin-top: 8px;
        }

        li.item > a {
          text-decoration: none;
          border-radius: 12px;
          color: ${colors.midnight_blue};
          background: ${colors.cloud};
          transition: all .2s ease-out;
        }

        li.item > a:hover {
          background: ${colors.asphalt};
          color: ${colors.cloud};
        }
      `}</style>
    </ul>
  )
}
