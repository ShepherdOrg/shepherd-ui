import { useDeploymentList } from '../src/subscriptions/useDeploymentList'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { colors } from '../src/colors'
import { useDeployment } from '../src/subscriptions/useDeployment'
import { usePageTransition } from '../utils/usePageTransition'
import { Curtain } from './curtain'
import { useCallback, MouseEvent } from 'react'
import { fromNullable } from 'data.either'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export const Sidebar = function() {
  const router = useRouter()
  const deploymentList = useDeploymentList()

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
  const currentDeployment = useDeployment(currentDeploymentId)

  return (
    <nav className={`nav ${deploymentList.isLeft ? 'hide-left' : ''}`}>
      <Curtain visible={leaving} />
      <h3 className="navTitle">
        <Link href="/">
          <a onClick={goToMainPage}>Shepherd</a>
        </Link>
      </h3>
      <ul>
        {deploymentList.fold(
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
                        currentDeployment
                          .chain(x =>
                            fromNullable(x.versions && x.versions.items)
                          )
                          .map(versions =>
                            versions.map(
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
                                      <a>
                                        {formatDistanceToNow(
                                          new Date(x.deployedAt)
                                        )}{' '}
                                        ago
                                      </a>
                                    </Link>
                                  </li>
                                )
                            )
                          )
                          .getOrElse(null)}
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
          transition: left 0.2s ease-out;
        }
        .nav.hide-left {
          left: -256px;
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
