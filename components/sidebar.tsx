import { useDeploymentList } from '../src/subscriptions/useDeploymentList'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { colors } from '../src/colors'
import { useDeployment } from '../src/subscriptions/useDeployment'
import { isSuccess } from '../src/subscriptions/subscribe'
import { usePageTransition } from '../utils/usePageTransition'
import { Curtain } from './curtain'
import { useCallback, MouseEvent } from 'react'

export const Sidebar = function() {
  const router = useRouter()
  const result = useDeploymentList()

  const { startExit, leaving } = usePageTransition()

  const goToMainPage = useCallback(
    async (ev: MouseEvent<HTMLAnchorElement>) => {
      ev.preventDefault()
      await startExit(async () => {
        await router.push('/?reveal=true', '/')
        window.scrollTo(0, 0)
      })
    },
    []
  )

  const currentDeploymentId = String(router.query.id)
  const currentDeploymentResult = useDeployment(currentDeploymentId)

  if (!isSuccess(currentDeploymentResult)) return null

  if (!currentDeploymentResult.data.getDeployment) {
    return null
  }

  const currentDeployment = currentDeploymentResult.data.getDeployment
  return (
    <nav className="nav">
      <Curtain visible={leaving} />
      <h3 className="navTitle">
        <Link href="/">
          <a onClick={goToMainPage}>Shepherd</a>
        </Link>
      </h3>
      <ul>
        {result.asEither().fold(
          () => null,
          deployments =>
            deployments.map(
              deployment =>
                deployment && (
                  <li
                    key={deployment.id}
                    className={
                      currentDeploymentId === deployment.id ? 'active' : ''
                    }
                  >
                    <Link href={`/deployment?id=${deployment.id}`}>
                      <a>{deployment.displayName}</a>
                    </Link>
                    <ul className="versionList">
                      {currentDeploymentId === deployment.id &&
                        currentDeployment.versions &&
                        currentDeployment.versions.items &&
                        currentDeployment.versions.items.map(
                          x =>
                            x && (
                              <li key={x.versionId}>
                                <Link
                                  href={`/deployment?id=${encodeURIComponent(
                                    deployment.id
                                  )}&version=${encodeURIComponent(
                                    x.versionId
                                  )}`}
                                >
                                  <a>{x.versionId}</a>
                                </Link>
                              </li>
                            )
                        )}
                    </ul>
                  </li>
                )
            )
        )}
      </ul>
      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 256px;
          overflow-y: scroll;
          background: ${colors.midnight_blue};
          color: ${colors.clouds};
        }
        .navTitle {
          font-size: 24px;
          text-align: center;
        }

        .navTitle > a {
          text-decoration: none;
          color: ${colors.clouds};
        }
        :global(*) {
          box-sizing: border-box;
        }
        :global(body) {
          background: ${colors.wet_asphalt};
          padding-left: 256px;
          margin: 0;
          font-family: 'Helvetica Neue';
        }
        ul {
          list-style-type: none;
          padding: 0;
          width: 100%;
        }
        li {
          width: 100%;
        }

        li > a {
          border-radius: 12px;
          padding: 8px 16px;
          margin: 0 16px;
          display: block;
          text-decoration: none;
          color: ${colors.clouds};
          transition: all 0.2s ease-out;
        }

        ul.versionList > li > a {
          margin-top: 16px;
          background: ${colors.silver};
          color: ${colors.midnight_blue};
          margin-left: 32px;
        }

        li > a:hover,
        li > a:active {
          color: blue;
        }
        li.active > a {
          background: ${colors.clouds};
          color: ${colors.midnight_blue};
        }
      `}</style>
    </nav>
  )
}
