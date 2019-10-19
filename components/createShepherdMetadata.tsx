import { useState, useCallback } from 'react'
import {
  CreateShepherdMetadataInput,
  CreateShepherdMetadataMutation,
  DeploymentType,
} from '../src/API'
import apiClient from '../src/apiClient'
import gql from 'graphql-tag'
import { createShepherdMetadata } from '../src/graphql/mutations'

export const CreateShepherdMetadata = function() {
  const [input, setInput] = useState<Partial<CreateShepherdMetadataInput>>({})

  const createMetadata = useCallback(async () => {
    const result = await apiClient().mutate<CreateShepherdMetadataMutation>({
      mutation: gql(createShepherdMetadata),
      variables: { input },
    })

    if (result.errors) {
      throw new Error(result.errors.map(x => x.message).join('\n'))
    }
    if (result.data) {
      return result.data
    }
  }, [input])

  return (
    <section>
      <input
        type="text"
        onChange={ev => setInput({ ...input, id: ev.currentTarget.value })}
        placeholder="id"
      />
      <br />
      <input
        type="text"
        onChange={ev =>
          setInput({ ...input, displayName: ev.currentTarget.value })
        }
        placeholder="displayName"
      />
      <br />
      <select
        onChange={ev =>
          setInput({
            ...input,
            deploymentType: ev.currentTarget.value as DeploymentType,
          })
        }
      >
        {Object.keys(DeploymentType).map(x => (
          <option id={x} key={x}>
            {x}
          </option>
        ))}
      </select>
      <br />
      dbMigrationImage?: string | null,
      <br />
      <input
        type="text"
        onChange={ev =>
          setInput({ ...input, lastCommits: ev.currentTarget.value })
        }
        placeholder="lastCommits"
      />
      <br />
      <input
        type="text"
        onChange={ev => setInput({ ...input, gitUrl: ev.currentTarget.value })}
        placeholder="gitUrl"
      />
      <br />
      <input
        type="text"
        onChange={ev => setInput({ ...input, gitHash: ev.currentTarget.value })}
        placeholder="gitHash"
      />
      <br />
      buildDate?: string | null, gitCommit?: string | null, dockerImageTag?:
      <br />
      string | null, buildHostName?: string | null,
      <br />
      <input
        type="text"
        onChange={ev =>
          setInput({
            ...input,
            lastDeploymentTimestamp: ev.currentTarget.value,
          })
        }
        placeholder="lastDeploymentTimestamp"
      />
      <br />
      <button onClick={createMetadata}>Create!</button>
    </section>
  )
}
