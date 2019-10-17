// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateHerdSpec = `subscription OnCreateHerdSpec {
  onCreateHerdSpec {
    key
    image
    imagetag
    description
  }
}
`;
export const onUpdateHerdSpec = `subscription OnUpdateHerdSpec {
  onUpdateHerdSpec {
    key
    image
    imagetag
    description
  }
}
`;
export const onDeleteHerdSpec = `subscription OnDeleteHerdSpec {
  onDeleteHerdSpec {
    key
    image
    imagetag
    description
  }
}
`;
export const onCreateShepherdMetadata = `subscription OnCreateShepherdMetadata {
  onCreateShepherdMetadata {
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
export const onUpdateShepherdMetadata = `subscription OnUpdateShepherdMetadata {
  onUpdateShepherdMetadata {
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
export const onDeleteShepherdMetadata = `subscription OnDeleteShepherdMetadata {
  onDeleteShepherdMetadata {
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
export const onCreateShepherdHref = `subscription OnCreateShepherdHref {
  onCreateShepherdHref {
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
export const onUpdateShepherdHref = `subscription OnUpdateShepherdHref {
  onUpdateShepherdHref {
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
export const onDeleteShepherdHref = `subscription OnDeleteShepherdHref {
  onDeleteShepherdHref {
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
export const onCreateDeploymentState = `subscription OnCreateDeploymentState {
  onCreateDeploymentState {
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
export const onUpdateDeploymentState = `subscription OnUpdateDeploymentState {
  onUpdateDeploymentState {
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
export const onDeleteDeploymentState = `subscription OnDeleteDeploymentState {
  onDeleteDeploymentState {
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
