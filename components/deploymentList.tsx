import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Link from 'next/link'
import { useDeploymentList } from '../src/subscriptions/useDeploymentList'
import { colors } from '../src/colors'
import { useCallback } from 'react'
import { usePageTransition } from '../utils/usePageTransition'
import { useRouter } from 'next/router'
import { Curtain } from './curtain'

export const DeploymentList = function() {
  const deploymentList = useDeploymentList()
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

  return (
    <>
      <Curtain visible={leaving} />
      <ul className="deploymentList">
        {deploymentList.fold(
          x =>
            x === 'Not found' ? (
              <li className="item">
                <a>Not found</a>
              </li>
            ) : x === 'loading' ? (
              <li className="item">
                <a>
                  <section className="center">
                    <h1>Loading</h1>
                  </section>
                </a>
              </li>
            ) : (
              <li className="item">Error!</li>
            ),
          items =>
            items.map(
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
                        <section className="center">
                          <div className="name">{x.displayName || x.id}</div>
                        </section>
                        <section className="grow">
                          <div className="deployerRole">{x.deployerRole}</div>
                          <div className="deploymentType">
                            {x.deploymentType}
                          </div>
                        </section>
                        <section>
                          <div className="time">
                            {formatDistanceToNow(
                              new Date(x.lastDeploymentTimestamp)
                            )}{' '}
                            ago
                          </div>
                          <div className="env">{x.env}</div>
                        </section>
                      </a>
                    </Link>
                  </li>
                )
            )
        )}
      </ul>
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
          margin-top: 16px;
        }
        li.item > a {
          background: ${colors.clouds};
          text-decoration: none;
          color: ${colors.midnight_blue};
          display: flex;
          flex-flow: row wrap;
          width: 100%;

          justify-content: space-between;

          box-shadow: 0;
          transition: all 0.2s ease-out;
          border-radius: 12px;
        }

        li.item > a:hover {
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
        }

        li.item > a > section {
          padding: 16px;
          border-right: 1px solid ${colors.concrete};
        }

        li.item > a > section:last-child {
          border-right: 0;
        }

        .center {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .grow {
          flex-grow: 1;
        }
      `}</style>
    </>
  )
}
