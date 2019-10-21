// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateDeployment = `subscription OnCreateDeployment {
  onCreateDeployment {
    id
    displayName
    deploymentType
    deployerRole
    dbMigrationImage
    hyperlinks {
      items {
        title
        url
      }
      nextToken
    }
    lastDeploymentTimestamp
    env
    versions {
      items {
        versionId
        version
        env
        deployedAt
        builtAt
        lastCommits
        gitUrl
        gitBranch
        gitHash
        gitCommit
        dockerImage
        dockerImageTag
        buildHostName
      }
      nextToken
    }
  }
}
`;
export const onUpdateDeployment = `subscription OnUpdateDeployment {
  onUpdateDeployment {
    id
    displayName
    deploymentType
    deployerRole
    dbMigrationImage
    hyperlinks {
      items {
        title
        url
      }
      nextToken
    }
    lastDeploymentTimestamp
    env
    versions {
      items {
        versionId
        version
        env
        deployedAt
        builtAt
        lastCommits
        gitUrl
        gitBranch
        gitHash
        gitCommit
        dockerImage
        dockerImageTag
        buildHostName
      }
      nextToken
    }
  }
}
`;
export const onDeleteDeployment = `subscription OnDeleteDeployment {
  onDeleteDeployment {
    id
    displayName
    deploymentType
    deployerRole
    dbMigrationImage
    hyperlinks {
      items {
        title
        url
      }
      nextToken
    }
    lastDeploymentTimestamp
    env
    versions {
      items {
        versionId
        version
        env
        deployedAt
        builtAt
        lastCommits
        gitUrl
        gitBranch
        gitHash
        gitCommit
        dockerImage
        dockerImageTag
        buildHostName
      }
      nextToken
    }
  }
}
`;
export const onCreateKubernetesDeploymentFile = `subscription OnCreateKubernetesDeploymentFile {
  onCreateKubernetesDeploymentFile {
    path
    content
    version {
      versionId
      version
      deployment {
        id
        displayName
        deploymentType
        deployerRole
        dbMigrationImage
        lastDeploymentTimestamp
        env
      }
      env
      deployedAt
      builtAt
      kubernetesDeploymentFiles {
        nextToken
      }
      lastCommits
      gitUrl
      gitBranch
      gitHash
      gitCommit
      dockerImage
      dockerImageTag
      buildHostName
      configuration {
        key
        value
        isSecret
      }
    }
  }
}
`;
export const onUpdateKubernetesDeploymentFile = `subscription OnUpdateKubernetesDeploymentFile {
  onUpdateKubernetesDeploymentFile {
    path
    content
    version {
      versionId
      version
      deployment {
        id
        displayName
        deploymentType
        deployerRole
        dbMigrationImage
        lastDeploymentTimestamp
        env
      }
      env
      deployedAt
      builtAt
      kubernetesDeploymentFiles {
        nextToken
      }
      lastCommits
      gitUrl
      gitBranch
      gitHash
      gitCommit
      dockerImage
      dockerImageTag
      buildHostName
      configuration {
        key
        value
        isSecret
      }
    }
  }
}
`;
export const onDeleteKubernetesDeploymentFile = `subscription OnDeleteKubernetesDeploymentFile {
  onDeleteKubernetesDeploymentFile {
    path
    content
    version {
      versionId
      version
      deployment {
        id
        displayName
        deploymentType
        deployerRole
        dbMigrationImage
        lastDeploymentTimestamp
        env
      }
      env
      deployedAt
      builtAt
      kubernetesDeploymentFiles {
        nextToken
      }
      lastCommits
      gitUrl
      gitBranch
      gitHash
      gitCommit
      dockerImage
      dockerImageTag
      buildHostName
      configuration {
        key
        value
        isSecret
      }
    }
  }
}
`;
export const onCreateShepherdHref = `subscription OnCreateShepherdHref {
  onCreateShepherdHref {
    title
    url
    metadata {
      id
      displayName
      deploymentType
      deployerRole
      dbMigrationImage
      hyperlinks {
        nextToken
      }
      lastDeploymentTimestamp
      env
      versions {
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
      id
      displayName
      deploymentType
      deployerRole
      dbMigrationImage
      hyperlinks {
        nextToken
      }
      lastDeploymentTimestamp
      env
      versions {
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
      id
      displayName
      deploymentType
      deployerRole
      dbMigrationImage
      hyperlinks {
        nextToken
      }
      lastDeploymentTimestamp
      env
      versions {
        nextToken
      }
    }
  }
}
`;
export const onCreateDeploymentVersion = `subscription OnCreateDeploymentVersion {
  onCreateDeploymentVersion {
    versionId
    version
    deployment {
      id
      displayName
      deploymentType
      deployerRole
      dbMigrationImage
      hyperlinks {
        nextToken
      }
      lastDeploymentTimestamp
      env
      versions {
        nextToken
      }
    }
    env
    deployedAt
    builtAt
    kubernetesDeploymentFiles {
      items {
        path
        content
      }
      nextToken
    }
    lastCommits
    gitUrl
    gitBranch
    gitHash
    gitCommit
    dockerImage
    dockerImageTag
    buildHostName
    configuration {
      key
      value
      isSecret
    }
  }
}
`;
export const onUpdateDeploymentVersion = `subscription OnUpdateDeploymentVersion {
  onUpdateDeploymentVersion {
    versionId
    version
    deployment {
      id
      displayName
      deploymentType
      deployerRole
      dbMigrationImage
      hyperlinks {
        nextToken
      }
      lastDeploymentTimestamp
      env
      versions {
        nextToken
      }
    }
    env
    deployedAt
    builtAt
    kubernetesDeploymentFiles {
      items {
        path
        content
      }
      nextToken
    }
    lastCommits
    gitUrl
    gitBranch
    gitHash
    gitCommit
    dockerImage
    dockerImageTag
    buildHostName
    configuration {
      key
      value
      isSecret
    }
  }
}
`;
export const onDeleteDeploymentVersion = `subscription OnDeleteDeploymentVersion {
  onDeleteDeploymentVersion {
    versionId
    version
    deployment {
      id
      displayName
      deploymentType
      deployerRole
      dbMigrationImage
      hyperlinks {
        nextToken
      }
      lastDeploymentTimestamp
      env
      versions {
        nextToken
      }
    }
    env
    deployedAt
    builtAt
    kubernetesDeploymentFiles {
      items {
        path
        content
      }
      nextToken
    }
    lastCommits
    gitUrl
    gitBranch
    gitHash
    gitCommit
    dockerImage
    dockerImageTag
    buildHostName
    configuration {
      key
      value
      isSecret
    }
  }
}
`;
