import { darkTheme } from 'utils/colors'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getBranchesFromVersions } from 'utils/branches'
import { Branch } from './icons/branch'
import { Deployment } from 'gql/customTypes'

/* Prototype for readme support
const ReactMarkdown = require('react-markdown')

const input = '# Tjon api readme\n\nLots of interesting information about Tjon Service api'
*/

interface Props {
  deployment: Deployment
}

export const DeploymentDetails = function({ deployment }: Props) {
  const [hidden, setHidden] = useState(true)
  const versions = deployment.deployment_versions || []

  useEffect(() => {
    setHidden(false)
  }, [])

  const branches = getBranchesFromVersions(versions)
  const theme = darkTheme
  return (
    <section className={`deploymentDetails ${hidden ? 'hide-opacity' : ''}`}>
      <h1>{deployment.display_name}</h1>
{/* Prototype for readme

      <h2>Readme</h2>
      <div className="readmeContainer">
        <ReactMarkdown source={input} />
      </div>
*/}
      <h2>Links</h2>
      <ul>
        {deployment.hyperlinks.map(link => (
          <li key={link.url}>
            <a href={link.url} rel="noopener noreferrer" target="_blank">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <h2>
        <Branch size={20} /> Branches
      </h2>
      <section className="branches">
        {Object.entries(branches).map(([branch, versions]) => (
          <Link
            key={branch}
            href={{
              pathname: `/deployment/[id]/version/[versionId]`,
              query: { id: deployment.id, versionId: versions[0].id },
            }}
            as={`/deployment/${deployment.id}/version/${encodeURIComponent(
              versions[0].id
            )}`}
          >
            <a className="branch">
              <h3>{branch}</h3>
              <section>
                <strong>Last deployed</strong>
                <br />
                {new Date(versions[0].deployed_at).toLocaleString()}
              </section>
            </a>
          </Link>
        ))}
      </section>
{/* Dev support code
      <div className="codeContainer">
        <code>{JSON.stringify(deployment, null, 2)}</code>
      </div>
*/}
      <style jsx>{`
        h1 {
          font-size: 48px;
        }
        h3 {
          width: 100%;
          text-align: center;
          margin: 0;
        }

        .branches {
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 16px;
        }

        .branch {
          text-decoration: none;
          color: ${theme.code.color};
          display: flex;
          flex-flow: row wrap;
          width: 100%;
          height: 100%;
          padding: 16px;

          justify-content: space-between;

          transition: all 0.2s ease-out;
          box-shadow: 0px 2px 5px ${theme.shadow};
        }

        .branch:hover {
          box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
        }
        .codeContainer {
          overflow-x: scroll;
          background: ${theme.code.background};
          padding: 16px;
          border-radius: 16px;
        }
        code {
          color: ${theme.code.color};
          white-space: pre;
          overflow-x: scroll;
          max-width: 100%;
        }
        .readmeContainer{
          color: ${theme.code.color};
          background-color: ${theme.code.background};
          padding: 16px;
          border-radius: 16px;
        }

      `}</style>
    </section>
  )
}
