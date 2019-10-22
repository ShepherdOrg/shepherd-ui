// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateDeployment = `subscription OnCreateDeployment {
  onCreateDeployment {
    id
    displayName
    description
    deploymentType
    deployerRole
    dbMigrationImage
    hyperlinks {
      title
      url
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
    description
    deploymentType
    deployerRole
    dbMigrationImage
    hyperlinks {
      title
      url
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
    description
    deploymentType
    deployerRole
    dbMigrationImage
    hyperlinks {
      title
      url
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
export const onCreateDeploymentVersion = `subscription OnCreateDeploymentVersion {
  onCreateDeploymentVersion {
    versionId
    version
    deployment {
      id
      displayName
      description
      deploymentType
      deployerRole
      dbMigrationImage
      hyperlinks {
        title
        url
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
      path
      content
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
      description
      deploymentType
      deployerRole
      dbMigrationImage
      hyperlinks {
        title
        url
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
      path
      content
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
      description
      deploymentType
      deployerRole
      dbMigrationImage
      hyperlinks {
        title
        url
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
      path
      content
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
