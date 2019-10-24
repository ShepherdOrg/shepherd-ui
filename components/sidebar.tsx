import { useRouter } from 'next/router'
import Link from 'next/link'
import { colors } from 'utils/colors'
import { useDeployment } from 'utils/subscriptions/useDeployment'
import { usePageTransition } from 'utils/usePageTransition'
import { Curtain } from './curtain'
import { useCallback, MouseEvent } from 'react'
import { fromNullable } from 'data.either'
import format from 'date-fns/format'

export const Sidebar = function() {
  const router = useRouter()
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
    <nav className={`nav ${currentDeployment.isLeft ? 'hide-left' : ''}`}>
      <Curtain visible={leaving} />
      <h3 className="navTitle">
        <Link href="/">
          <a onClick={goToMainPage}>Shepherd</a>
        </Link>
      </h3>
      {currentDeployment.fold(
        () => null,
        deployment => (
          <>
            <Link href={`/deployment?id=${deployment.id}`}>
              <a>{deployment.displayName}</a>
            </Link>
            <ul className="versionList">
              {currentDeployment
                .chain(x => fromNullable(x.versions && x.versions.items))
                .map(versions =>
                  versions.map(
                    x =>
                      x && (
                        <li
                          key={x.versionId}
                          className={
                            x.versionId === router.query.version ? 'active' : ''
                          }
                        >
                          <Link
                            href={`/deployment?id=${encodeURIComponent(
                              deployment.id
                            )}&version=${encodeURIComponent(x.versionId)}`}
                          >
                            <a>
                              {format(
                                new Date(x.deployedAt),
                                'MMM d, yyyy h:mm a'
                              )}{' '}
                            </a>
                          </Link>
                        </li>
                      )
                  )
                )
                .getOrElse(null)}
            </ul>
          </>
        )
      )}
      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 256px;
          overflow-y: scroll;
          background: ${colors.midnightBlue};
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
          background: ${colors.wetAsphalt};
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

        a {
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
          background: ${colors.turquoise};
          color: white;
          transition: background 0.2s ease-out;
        }

        ul.versionList > li.active > a,
        ul.versionList > li > a:hover {
          background: #48c9b0;
        }

        li > a:hover,
        li > a:active {
          color: blue;
        }
      `}</style>
    </nav>
  )
}
