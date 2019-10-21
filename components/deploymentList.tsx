import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Link from 'next/link'
import { useDeploymentList } from '../src/subscriptions/useDeploymentList'
import { colors } from '../src/colors'
import { useCallback } from 'react'
import { usePageTransition } from '../utils/usePageTransition'
import { useRouter } from 'next/router'
import { Curtain } from './curtain'

export const DeploymentList = function() {
  const result = useDeploymentList()
  const { startExit, leaving } = usePageTransition()
  const router = useRouter()
  const navigateToDeployment = useCallback(
    async (deploymentId: string) => {
      await startExit(async () => {
        await router.push(
          `/deployment?id=${encodeURIComponent(deploymentId)}&reveal=true`,
          `/deployment?id=${encodeURIComponent(deploymentId)}`
        )
        window.scrollTo(0, 0)
      })
    },
    [startExit]
  )

  if (result.loading) return <h1>Loading...</h1>
  if ('error' in result) return <h1>Error!</h1>
  if (!(result.data.listDeployments && result.data.listDeployments.items)) {
    return <ul></ul>
  }
  return (
    <>
      <Curtain visible={leaving} />
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
                  <a
                    href={`/deployment?id=${x.id}`}
                    onClick={ev => (
                      ev.preventDefault(), navigateToDeployment(x.id)
                    )}
                  >
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
          background: ${colors.clouds};
          transition: all .2s ease-out;
        }

        li.item > a:hover {
          background: ${colors.wet_asphalt};
          color: ${colors.clouds};
        }
      `}</style>
      </ul>
    </>
  )
}
