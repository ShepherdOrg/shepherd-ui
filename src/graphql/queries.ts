// tslint:disable
// this is an auto generated file. This will be overwritten

export const getHerdSpec = `query GetHerdSpec($id: ID!) {
  getHerdSpec(id: $id) {
    key
    image
    imagetag
    description
  }
}
`;
export const listHerdSpecs = `query ListHerdSpecs(
  $filter: ModelHerdSpecFilterInput
  $limit: Int
  $nextToken: String
) {
  listHerdSpecs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      key
      image
      imagetag
      description
    }
    nextToken
  }
}
`;
export const getShepherdMetadata = `query GetShepherdMetadata($id: ID!) {
  getShepherdMetadata(id: $id) {
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
export const listShepherdMetadatas = `query ListShepherdMetadatas(
  $filter: ModelShepherdMetadataFilterInput
  $limit: Int
  $nextToken: String
) {
  listShepherdMetadatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getShepherdHref = `query GetShepherdHref($id: ID!) {
  getShepherdHref(id: $id) {
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
export const listShepherdHrefs = `query ListShepherdHrefs(
  $filter: ModelShepherdHrefFilterInput
  $limit: Int
  $nextToken: String
) {
  listShepherdHrefs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      }
    }
    nextToken
  }
}
`;
export const getDeploymentState = `query GetDeploymentState($id: ID!) {
  getDeploymentState(id: $id) {
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
export const listDeploymentStates = `query ListDeploymentStates(
  $filter: ModelDeploymentStateFilterInput
  $limit: Int
  $nextToken: String
) {
  listDeploymentStates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
