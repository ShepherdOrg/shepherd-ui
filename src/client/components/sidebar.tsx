import { useRouter } from 'next/router'
import Link from 'next/link'
import { colors } from 'utils/colors'
import { useDeployment } from 'utils/subscriptions/useDeployment'
import { useCallback, MouseEvent } from 'react'
import { fromNullable } from 'data.either'
import format from 'date-fns/format'
import { useDeploymentVersion } from 'utils/subscriptions/useDeploymentVersion'

export const Sidebar = function() {
  const router = useRouter()

  const currentDeploymentId = String(router.query.id)
  const currentDeploymentVersionId = String(router.query.versionId)
  const currentDeploymentVersion = useDeploymentVersion(
    currentDeploymentVersionId
  )
  const branch = currentDeploymentVersion.map(x => x.git_branch).getOrElse('')
  const currentDeployment = useDeployment(currentDeploymentId, {
    git_branch: { _eq: branch },
  })

  return (
    <nav className="nav">
      <h3 className="navTitle">
        <Link href="/">
          <a>Shepherd</a>
        </Link>
      </h3>
      {currentDeployment.fold(
        () => null,
        deployment => (
          <>
            <Link href={`/deployment/[id]?id=${deployment.id}`}>
              <a>{deployment.display_name}</a>
            </Link>
            <h3>Deployments from {branch}</h3>
            <ul className="versionList">
              {currentDeployment
                .chain(x => fromNullable(x.deployment_versions))
                .map(versions =>
                  versions.map(
                    x =>
                      x && (
                        <li
                          key={x.id}
                          className={
                            x.id === router.query.versionId ? 'active' : ''
                          }
                        >
                          <Link
                            href={{
                              pathname: `/deployment/[id]/version/[versionId]`,
                              query: {
                                id: deployment.id,
                                versionId: x.id,
                              },
                            }}
                            as={`/deployment/${encodeURIComponent(
                              deployment.id
                            )}/version/${encodeURIComponent(x.id)}`}
                          >
                            <a>
                              {format(
                                new Date(x.deployed_at),
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
          color: black;
          transition: left 0.2s ease-out;
          box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.12);
        }
        .navTitle {
          font-size: 24px;
          text-align: center;
        }

        .navTitle > a {
          text-decoration: none;
          color: black;
        }

        h3 {
          font-size: 16px;
          padding: 8px 0 8px 32px;
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
          color: black;
          transition: all 0.2s ease-out;
        }

        ul.versionList > li > a {
          margin-top: 16px;
          color: black;
          transition: all 0.2s ease-out;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        }

        ul.versionList > li.active > a {
          background: ${colors.clouds};
        }

        ul.versionList > li > a:hover {
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
        }

        li > a:hover,
        li > a:active {
          color: blue;
        }
      `}</style>
    </nav>
  )
}
