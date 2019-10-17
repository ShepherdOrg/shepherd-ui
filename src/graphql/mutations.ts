// tslint:disable
// this is an auto generated file. This will be overwritten

export const createHerdSpec = `mutation CreateHerdSpec($input: CreateHerdSpecInput!) {
  createHerdSpec(input: $input) {
    key
    image
    imagetag
    description
  }
}
`;
export const updateHerdSpec = `mutation UpdateHerdSpec($input: UpdateHerdSpecInput!) {
  updateHerdSpec(input: $input) {
    key
    image
    imagetag
    description
  }
}
`;
export const deleteHerdSpec = `mutation DeleteHerdSpec($input: DeleteHerdSpecInput!) {
  deleteHerdSpec(input: $input) {
    key
    image
    imagetag
    description
  }
}
`;
export const createShepherdMetadata = `mutation CreateShepherdMetadata($input: CreateShepherdMetadataInput!) {
  createShepherdMetadata(input: $input) {
    displayName
    deploymentType
    dbMigrationImage
    lastCommits
    gitUrl
    gitHash
    buildDate
    gitCommit
    dockerImageTag
    buildHostName
    hyperlinks {
      items {
        title
        url
      }
      nextToken
    }
    herdSpec {
      key
      image
      imagetag
      description
    }
    deploymentStates {
      items {
        new
        key
        modified
        operation
        version
        lastVersion
        timestamp
        signature
        env
      }
      nextToken
    }
  }
}
`;
export const updateShepherdMetadata = `mutation UpdateShepherdMetadata($input: UpdateShepherdMetadataInput!) {
  updateShepherdMetadata(input: $input) {
    displayName
    deploymentType
    dbMigrationImage
    lastCommits
    gitUrl
    gitHash
    buildDate
    gitCommit
    dockerImageTag
    buildHostName
    hyperlinks {
      items {
        title
        url
      }
      nextToken
    }
    herdSpec {
      key
      image
      imagetag
      description
    }
    deploymentStates {
      items {
        new
        key
        modified
        operation
        version
        lastVersion
        timestamp
        signature
        env
      }
      nextToken
    }
  }
}
`;
export const deleteShepherdMetadata = `mutation DeleteShepherdMetadata($input: DeleteShepherdMetadataInput!) {
  deleteShepherdMetadata(input: $input) {
    displayName
    deploymentType
    dbMigrationImage
    lastCommits
    gitUrl
    gitHash
    buildDate
    gitCommit
    dockerImageTag
    buildHostName
    hyperlinks {
      items {
        title
        url
      }
      nextToken
    }
    herdSpec {
      key
      image
      imagetag
      description
    }
    deploymentStates {
      items {
        new
        key
        modified
        operation
        version
        lastVersion
        timestamp
        signature
        env
      }
      nextToken
    }
  }
}
`;
export const createShepherdHref = `mutation CreateShepherdHref($input: CreateShepherdHrefInput!) {
  createShepherdHref(input: $input) {
    title
    url
    metadata {
      displayName
      deploymentType
      dbMigrationImage
      lastCommits
      gitUrl
      gitHash
      buildDate
      gitCommit
      dockerImageTag
      buildHostName
      hyperlinks {
        nextToken
      }
      herdSpec {
        key
        image
        imagetag
        description
      }
      deploymentStates {
        nextToken
      }
    }
  }
}
`;
export const updateShepherdHref = `mutation UpdateShepherdHref($input: UpdateShepherdHrefInput!) {
  updateShepherdHref(input: $input) {
    title
    url
    metadata {
      displayName
      deploymentType
      dbMigrationImage
      lastCommits
      gitUrl
      gitHash
      buildDate
      gitCommit
      dockerImageTag
      buildHostName
      hyperlinks {
        nextToken
      }
      herdSpec {
        key
        image
        imagetag
        description
      }
      deploymentStates {
        nextToken
      }
    }
  }
}
`;
export const deleteShepherdHref = `mutation DeleteShepherdHref($input: DeleteShepherdHrefInput!) {
  deleteShepherdHref(input: $input) {
    title
    url
    metadata {
      displayName
      deploymentType
      dbMigrationImage
      lastCommits
      gitUrl
      gitHash
      buildDate
      gitCommit
      dockerImageTag
      buildHostName
      hyperlinks {
        nextToken
      }
      herdSpec {
        key
        image
        imagetag
        description
      }
      deploymentStates {
        nextToken
      }
    }
  }
}
`;
export const createDeploymentState = `mutation CreateDeploymentState($input: CreateDeploymentStateInput!) {
  createDeploymentState(input: $input) {
    deployment {
      displayName
      deploymentType
      dbMigrationImage
      lastCommits
      gitUrl
      gitHash
      buildDate
      gitCommit
      dockerImageTag
      buildHostName
      hyperlinks {
        nextToken
      }
      herdSpec {
        key
        image
        imagetag
        description
      }
      deploymentStates {
        nextToken
      }
    }
    new
    key
    modified
    operation
    version
    lastVersion
    timestamp
    signature
    env
  }
}
`;
export const updateDeploymentState = `mutation UpdateDeploymentState($input: UpdateDeploymentStateInput!) {
  updateDeploymentState(input: $input) {
    deployment {
      displayName
      deploymentType
      dbMigrationImage
      lastCommits
      gitUrl
      gitHash
      buildDate
      gitCommit
      dockerImageTag
      buildHostName
      hyperlinks {
        nextToken
      }
      herdSpec {
        key
        image
        imagetag
        description
      }
      deploymentStates {
        nextToken
      }
    }
    new
    key
    modified
    operation
    version
    lastVersion
    timestamp
    signature
    env
  }
}
`;
export const deleteDeploymentState = `mutation DeleteDeploymentState($input: DeleteDeploymentStateInput!) {
  deleteDeploymentState(input: $input) {
    deployment {
      displayName
      deploymentType
      dbMigrationImage
      lastCommits
      gitUrl
      gitHash
      buildDate
      gitCommit
      dockerImageTag
      buildHostName
      hyperlinks {
        nextToken
      }
      herdSpec {
        key
        image
        imagetag
        description
      }
      deploymentStates {
        nextToken
      }
    }
    new
    key
    modified
    operation
    version
    lastVersion
    timestamp
    signature
    env
  }
}
`;
