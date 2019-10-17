/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateHerdSpecInput = {
  key: string,
  image: string,
  imagetag: string,
  description: string,
};

export type UpdateHerdSpecInput = {
  key?: string | null,
  image?: string | null,
  imagetag?: string | null,
  description?: string | null,
};

export type DeleteHerdSpecInput = {
  id?: string | null,
};

export type CreateShepherdMetadataInput = {
  displayName: string,
  deploymentType: DeploymentType,
  dbMigrationImage?: string | null,
  lastCommits: string,
  gitUrl: string,
  gitHash: string,
  buildDate?: string | null,
  gitCommit?: string | null,
  dockerImageTag?: string | null,
  buildHostName?: string | null,
};

export enum DeploymentType {
  Deployer = "Deployer",
  Kubernetes = "Kubernetes",
  Infrastructure = "Infrastructure",
  Deployment = "Deployment",
}


export type UpdateShepherdMetadataInput = {
  displayName?: string | null,
  deploymentType?: DeploymentType | null,
  dbMigrationImage?: string | null,
  lastCommits?: string | null,
  gitUrl?: string | null,
  gitHash?: string | null,
  buildDate?: string | null,
  gitCommit?: string | null,
  dockerImageTag?: string | null,
  buildHostName?: string | null,
};

export type DeleteShepherdMetadataInput = {
  id?: string | null,
};

export type CreateShepherdHrefInput = {
  title: string,
  url: string,
  shepherdHrefMetadataId?: string | null,
};

export type UpdateShepherdHrefInput = {
  title?: string | null,
  url?: string | null,
  shepherdHrefMetadataId?: string | null,
};

export type DeleteShepherdHrefInput = {
  id?: string | null,
};

export type CreateDeploymentStateInput = {
  new?: boolean | null,
  key?: string | null,
  modified?: boolean | null,
  operation?: string | null,
  version?: string | null,
  lastVersion: string,
  timestamp: string,
  signature?: string | null,
  env?: string | null,
  deploymentStateDeploymentId?: string | null,
};

export type UpdateDeploymentStateInput = {
  new?: boolean | null,
  key?: string | null,
  modified?: boolean | null,
  operation?: string | null,
  version?: string | null,
  lastVersion?: string | null,
  timestamp?: string | null,
  signature?: string | null,
  env?: string | null,
  deploymentStateDeploymentId?: string | null,
};

export type DeleteDeploymentStateInput = {
  id?: string | null,
};

export type ModelHerdSpecFilterInput = {
  key?: ModelStringFilterInput | null,
  image?: ModelStringFilterInput | null,
  imagetag?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  and?: Array< ModelHerdSpecFilterInput | null > | null,
  or?: Array< ModelHerdSpecFilterInput | null > | null,
  not?: ModelHerdSpecFilterInput | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelShepherdMetadataFilterInput = {
  displayName?: ModelStringFilterInput | null,
  deploymentType?: ModelDeploymentTypeFilterInput | null,
  dbMigrationImage?: ModelStringFilterInput | null,
  lastCommits?: ModelStringFilterInput | null,
  gitUrl?: ModelStringFilterInput | null,
  gitHash?: ModelStringFilterInput | null,
  buildDate?: ModelStringFilterInput | null,
  gitCommit?: ModelStringFilterInput | null,
  dockerImageTag?: ModelStringFilterInput | null,
  buildHostName?: ModelStringFilterInput | null,
  and?: Array< ModelShepherdMetadataFilterInput | null > | null,
  or?: Array< ModelShepherdMetadataFilterInput | null > | null,
  not?: ModelShepherdMetadataFilterInput | null,
};

export type ModelDeploymentTypeFilterInput = {
  eq?: DeploymentType | null,
  ne?: DeploymentType | null,
};

export type ModelShepherdHrefFilterInput = {
  title?: ModelStringFilterInput | null,
  url?: ModelStringFilterInput | null,
  and?: Array< ModelShepherdHrefFilterInput | null > | null,
  or?: Array< ModelShepherdHrefFilterInput | null > | null,
  not?: ModelShepherdHrefFilterInput | null,
};

export type ModelDeploymentStateFilterInput = {
  new?: ModelBooleanFilterInput | null,
  key?: ModelStringFilterInput | null,
  modified?: ModelBooleanFilterInput | null,
  operation?: ModelStringFilterInput | null,
  version?: ModelStringFilterInput | null,
  lastVersion?: ModelStringFilterInput | null,
  timestamp?: ModelStringFilterInput | null,
  signature?: ModelStringFilterInput | null,
  env?: ModelStringFilterInput | null,
  and?: Array< ModelDeploymentStateFilterInput | null > | null,
  or?: Array< ModelDeploymentStateFilterInput | null > | null,
  not?: ModelDeploymentStateFilterInput | null,
};

export type ModelBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateHerdSpecMutationVariables = {
  input: CreateHerdSpecInput,
};

export type CreateHerdSpecMutation = {
  createHerdSpec:  {
    __typename: "HerdSpec",
    key: string,
    image: string,
    imagetag: string,
    description: string,
  } | null,
};

export type UpdateHerdSpecMutationVariables = {
  input: UpdateHerdSpecInput,
};

export type UpdateHerdSpecMutation = {
  updateHerdSpec:  {
    __typename: "HerdSpec",
    key: string,
    image: string,
    imagetag: string,
    description: string,
  } | null,
};

export type DeleteHerdSpecMutationVariables = {
  input: DeleteHerdSpecInput,
};

export type DeleteHerdSpecMutation = {
  deleteHerdSpec:  {
    __typename: "HerdSpec",
    key: string,
    image: string,
    imagetag: string,
    description: string,
  } | null,
};

export type CreateShepherdMetadataMutationVariables = {
  input: CreateShepherdMetadataInput,
};

export type CreateShepherdMetadataMutation = {
  createShepherdMetadata:  {
    __typename: "ShepherdMetadata",
    displayName: string,
    deploymentType: DeploymentType,
    dbMigrationImage: string | null,
    lastCommits: string,
    gitUrl: string,
    gitHash: string,
    buildDate: string | null,
    gitCommit: string | null,
    dockerImageTag: string | null,
    buildHostName: string | null,
    hyperlinks:  {
      __typename: "ModelShepherdHrefConnection",
      items:  Array< {
        __typename: "ShepherdHref",
        title: string,
        url: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    herdSpec:  {
      __typename: "HerdSpec",
      key: string,
      image: string,
      imagetag: string,
      description: string,
    } | null,
    deploymentStates:  {
      __typename: "ModelDeploymentStateConnection",
      items:  Array< {
        __typename: "DeploymentState",
        new: boolean | null,
        key: string | null,
        modified: boolean | null,
        operation: string | null,
        version: string | null,
        lastVersion: string,
        timestamp: string,
        signature: string | null,
        env: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateShepherdMetadataMutationVariables = {
  input: UpdateShepherdMetadataInput,
};

export type UpdateShepherdMetadataMutation = {
  updateShepherdMetadata:  {
    __typename: "ShepherdMetadata",
    displayName: string,
    deploymentType: DeploymentType,
    dbMigrationImage: string | null,
    lastCommits: string,
    gitUrl: string,
    gitHash: string,
    buildDate: string | null,
    gitCommit: string | null,
    dockerImageTag: string | null,
    buildHostName: string | null,
    hyperlinks:  {
      __typename: "ModelShepherdHrefConnection",
      items:  Array< {
        __typename: "ShepherdHref",
        title: string,
        url: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    herdSpec:  {
      __typename: "HerdSpec",
      key: string,
      image: string,
      imagetag: string,
      description: string,
    } | null,
    deploymentStates:  {
      __typename: "ModelDeploymentStateConnection",
      items:  Array< {
        __typename: "DeploymentState",
        new: boolean | null,
        key: string | null,
        modified: boolean | null,
        operation: string | null,
        version: string | null,
        lastVersion: string,
        timestamp: string,
        signature: string | null,
        env: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteShepherdMetadataMutationVariables = {
  input: DeleteShepherdMetadataInput,
};

export type DeleteShepherdMetadataMutation = {
  deleteShepherdMetadata:  {
    __typename: "ShepherdMetadata",
    displayName: string,
    deploymentType: DeploymentType,
    dbMigrationImage: string | null,
    lastCommits: string,
    gitUrl: string,
    gitHash: string,
    buildDate: string | null,
    gitCommit: string | null,
    dockerImageTag: string | null,
    buildHostName: string | null,
    hyperlinks:  {
      __typename: "ModelShepherdHrefConnection",
      items:  Array< {
        __typename: "ShepherdHref",
        title: string,
        url: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    herdSpec:  {
      __typename: "HerdSpec",
      key: string,
      image: string,
      imagetag: string,
      description: string,
    } | null,
    deploymentStates:  {
      __typename: "ModelDeploymentStateConnection",
      items:  Array< {
        __typename: "DeploymentState",
        new: boolean | null,
        key: string | null,
        modified: boolean | null,
        operation: string | null,
        version: string | null,
        lastVersion: string,
        timestamp: string,
        signature: string | null,
        env: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateShepherdHrefMutationVariables = {
  input: CreateShepherdHrefInput,
};

export type CreateShepherdHrefMutation = {
  createShepherdHref:  {
    __typename: "ShepherdHref",
    title: string,
    url: string,
    metadata:  {
      __typename: "ShepherdMetadata",
      displayName: string,
      deploymentType: DeploymentType,
      dbMigrationImage: string | null,
      lastCommits: string,
      gitUrl: string,
      gitHash: string,
      buildDate: string | null,
      gitCommit: string | null,
      dockerImageTag: string | null,
      buildHostName: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
      herdSpec:  {
        __typename: "HerdSpec",
        key: string,
        image: string,
        imagetag: string,
        description: string,
      } | null,
      deploymentStates:  {
        __typename: "ModelDeploymentStateConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateShepherdHrefMutationVariables = {
  input: UpdateShepherdHrefInput,
};

export type UpdateShepherdHrefMutation = {
  updateShepherdHref:  {
    __typename: "ShepherdHref",
    title: string,
    url: string,
    metadata:  {
      __typename: "ShepherdMetadata",
      displayName: string,
      deploymentType: DeploymentType,
      dbMigrationImage: string | null,
      lastCommits: string,
      gitUrl: string,
      gitHash: string,
      buildDate: string | null,
      gitCommit: string | null,
      dockerImageTag: string | null,
      buildHostName: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
      herdSpec:  {
        __typename: "HerdSpec",
        key: string,
        image: string,
        imagetag: string,
        description: string,
      } | null,
      deploymentStates:  {
        __typename: "ModelDeploymentStateConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteShepherdHrefMutationVariables = {
  input: DeleteShepherdHrefInput,
};

export type DeleteShepherdHrefMutation = {
  deleteShepherdHref:  {
    __typename: "ShepherdHref",
    title: string,
    url: string,
    metadata:  {
      __typename: "ShepherdMetadata",
      displayName: string,
      deploymentType: DeploymentType,
      dbMigrationImage: string | null,
      lastCommits: string,
      gitUrl: string,
      gitHash: string,
      buildDate: string | null,
      gitCommit: string | null,
      dockerImageTag: string | null,
      buildHostName: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
      herdSpec:  {
        __typename: "HerdSpec",
        key: string,
        image: string,
        imagetag: string,
        description: string,
      } | null,
      deploymentStates:  {
        __typename: "ModelDeploymentStateConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateDeploymentStateMutationVariables = {
  input: CreateDeploymentStateInput,
};

export type CreateDeploymentStateMutation = {
  createDeploymentState:  {
    __typename: "DeploymentState",
    deployment:  {
      __typename: "ShepherdMetadata",
      displayName: string,
      deploymentType: DeploymentType,
      dbMigrationImage: string | null,
      lastCommits: string,
      gitUrl: string,
      gitHash: string,
      buildDate: string | null,
      gitCommit: string | null,
      dockerImageTag: string | null,
      buildHostName: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
      herdSpec:  {
        __typename: "HerdSpec",
        key: string,
        image: string,
        imagetag: string,
        description: string,
      } | null,
      deploymentStates:  {
        __typename: "ModelDeploymentStateConnection",
        nextToken: string | null,
      } | null,
    } | null,
    new: boolean | null,
    key: string | null,
    modified: boolean | null,
    operation: string | null,
    version: string | null,
    lastVersion: string,
    timestamp: string,
    signature: string | null,
    env: string | null,
  } | null,
};

export type UpdateDeploymentStateMutationVariables = {
  input: UpdateDeploymentStateInput,
};

export type UpdateDeploymentStateMutation = {
  updateDeploymentState:  {
    __typename: "DeploymentState",
    deployment:  {
      __typename: "ShepherdMetadata",
      displayName: string,
      deploymentType: DeploymentType,
      dbMigrationImage: string | null,
      lastCommits: string,
      gitUrl: string,
      gitHash: string,
      buildDate: string | null,
      gitCommit: string | null,
      dockerImageTag: string | null,
      buildHostName: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
      herdSpec:  {
        __typename: "HerdSpec",
        key: string,
        image: string,
        imagetag: string,
        description: string,
      } | null,
      deploymentStates:  {
        __typename: "ModelDeploymentStateConnection",
        nextToken: string | null,
      } | null,
    } | null,
    new: boolean | null,
    key: string | null,
    modified: boolean | null,
    operation: string | null,
    version: string | null,
    lastVersion: string,
    timestamp: string,
    signature: string | null,
    env: string | null,
  } | null,
};

export type DeleteDeploymentStateMutationVariables = {
  input: DeleteDeploymentStateInput,
};

export type DeleteDeploymentStateMutation = {
  deleteDeploymentState:  {
    __typename: "DeploymentState",
    deployment:  {
      __typename: "ShepherdMetadata",
      displayName: string,
      deploymentType: DeploymentType,
      dbMigrationImage: string | null,
      lastCommits: string,
      gitUrl: string,
      gitHash: string,
      buildDate: string | null,
      gitCommit: string | null,
      dockerImageTag: string | null,
      buildHostName: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
      herdSpec:  {
        __typename: "HerdSpec",
        key: string,
        image: string,
        imagetag: string,
        description: string,
      } | null,
      deploymentStates:  {
        __typename: "ModelDeploymentStateConnection",
        nextToken: string | null,
      } | null,
    } | null,
    new: boolean | null,
    key: string | null,
    modified: boolean | null,
    operation: string | null,
    version: string | null,
    lastVersion: string,
    timestamp: string,
    signature: string | null,
    env: string | null,
  } | null,
};

export type GetHerdSpecQueryVariables = {
  id: string,
};

export type GetHerdSpecQuery = {
  getHerdSpec:  {
    __typename: "HerdSpec",
    key: string,
    image: string,
    imagetag: string,
    description: string,
  } | null,
};

export type ListHerdSpecsQueryVariables = {
  filter?: ModelHerdSpecFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHerdSpecsQuery = {
  listHerdSpecs:  {
    __typename: "ModelHerdSpecConnection",
    items:  Array< {
      __typename: "HerdSpec",
      key: string,
      image: string,
      imagetag: string,
      description: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetShepherdMetadataQueryVariables = {
  id: string,
};

export type GetShepherdMetadataQuery = {
  getShepherdMetadata:  {
    __typename: "ShepherdMetadata",
    displayName: string,
    deploymentType: DeploymentType,
    dbMigrationImage: string | null,
    lastCommits: string,
    gitUrl: string,
    gitHash: string,
    buildDate: string | null,
    gitCommit: string | null,
    dockerImageTag: string | null,
    buildHostName: string | null,
    hyperlinks:  {
      __typename: "ModelShepherdHrefConnection",
      items:  Array< {
        __typename: "ShepherdHref",
        title: string,
        url: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    herdSpec:  {
      __typename: "HerdSpec",
      key: string,
      image: string,
      imagetag: string,
      description: string,
    } | null,
    deploymentStates:  {
      __typename: "ModelDeploymentStateConnection",
      items:  Array< {
        __typename: "DeploymentState",
        new: boolean | null,
        key: string | null,
        modified: boolean | null,
        operation: string | null,
        version: string | null,
        lastVersion: string,
        timestamp: string,
        signature: string | null,
        env: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListShepherdMetadatasQueryVariables = {
  filter?: ModelShepherdMetadataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListShepherdMetadatasQuery = {
  listShepherdMetadatas:  {
    __typename: "ModelShepherdMetadataConnection",
    items:  Array< {
      __typename: "ShepherdMetadata",
      displayName: string,
      deploymentType: DeploymentType,
      dbMigrationImage: string | null,
      lastCommits: string,
      gitUrl: string,
      gitHash: string,
      buildDate: string | null,
      gitCommit: string | null,
      dockerImageTag: string | null,
      buildHostName: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
      herdSpec:  {
        __typename: "HerdSpec",
        key: string,
        image: string,
        imagetag: string,
        description: string,
      } | null,
      deploymentStates:  {
        __typename: "ModelDeploymentStateConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetShepherdHrefQueryVariables = {
  id: string,
};

export type GetShepherdHrefQuery = {
  getShepherdHref:  {
    __typename: "ShepherdHref",
    title: string,
    url: string,
    metadata:  {
      __typename: "ShepherdMetadata",
      displayName: string,
      deploymentType: DeploymentType,
      dbMigrationImage: string | null,
      lastCommits: string,
      gitUrl: string,
      gitHash: string,
      buildDate: string | null,
      gitCommit: string | null,
      dockerImageTag: string | null,
      buildHostName: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
      herdSpec:  {
        __typename: "HerdSpec",
        key: string,
        image: string,
        imagetag: string,
        description: string,
      } | null,
      deploymentStates:  {
        __typename: "ModelDeploymentStateConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListShepherdHrefsQueryVariables = {
  filter?: ModelShepherdHrefFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListShepherdHrefsQuery = {
  listShepherdHrefs:  {
    __typename: "ModelShepherdHrefConnection",
    items:  Array< {
      __typename: "ShepherdHref",
      title: string,
      url: string,
      metadata:  {
        __typename: "ShepherdMetadata",
        displayName: string,
        deploymentType: DeploymentType,
        dbMigrationImage: string | null,
        lastCommits: string,
        gitUrl: string,
        gitHash: string,
        buildDate: string | null,
        gitCommit: string | null,
        dockerImageTag: string | null,
        buildHostName: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetDeploymentStateQueryVariables = {
  id: string,
};

export type GetDeploymentStateQuery = {
  getDeploymentState:  {
    __typename: "DeploymentState",
    deployment:  {
      __typename: "ShepherdMetadata",
      displayName: string,
      deploymentType: DeploymentType,
      dbMigrationImage: string | null,
      lastCommits: string,
      gitUrl: string,
      gitHash: string,
      buildDate: string | null,
      gitCommit: string | null,
      dockerImageTag: string | null,
      buildHostName: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
      herdSpec:  {
        __typename: "HerdSpec",
        key: string,
        image: string,
        imagetag: string,
        description: string,
      } | null,
      deploymentStates:  {
        __typename: "ModelDeploymentStateConnection",
        nextToken: string | null,
      } | null,
    } | null,
    new: boolean | null,
    key: string | null,
    modified: boolean | null,
    operation: string | null,
    version: string | null,
    lastVersion: string,
    timestamp: string,
    signature: string | null,
    env: string | null,
  } | null,
};

export type ListDeploymentStatesQueryVariables = {
  filter?: ModelDeploymentStateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDeploymentStatesQuery = {
  listDeploymentStates:  {
    __typename: "ModelDeploymentStateConnection",
    items:  Array< {
      __typename: "DeploymentState",
      deployment:  {
        __typename: "ShepherdMetadata",
        displayName: string,
        deploymentType: DeploymentType,
        dbMigrationImage: string | null,
        lastCommits: string,
        gitUrl: string,
        gitHash: string,
        buildDate: string | null,
        gitCommit: string | null,
        dockerImageTag: string | null,
        buildHostName: string | null,
      } | null,
      new: boolean | null,
      key: string | null,
      modified: boolean | null,
      operation: string | null,
      version: string | null,
      lastVersion: string,
      timestamp: string,
      signature: string | null,
      env: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateHerdSpecSubscription = {
  onCreateHerdSpec:  {
    __typename: "HerdSpec",
    key: string,
    image: string,
    imagetag: string,
    description: string,
  } | null,
};

export type OnUpdateHerdSpecSubscription = {
  onUpdateHerdSpec:  {
    __typename: "HerdSpec",
    key: string,
    image: string,
    imagetag: string,
    description: string,
  } | null,
};

export type OnDeleteHerdSpecSubscription = {
  onDeleteHerdSpec:  {
    __typename: "HerdSpec",
    key: string,
    image: string,
    imagetag: string,
    description: string,
  } | null,
};

export type OnCreateShepherdMetadataSubscription = {
  onCreateShepherdMetadata:  {
    __typename: "ShepherdMetadata",
    displayName: string,
    deploymentType: DeploymentType,
    dbMigrationImage: string | null,
    lastCommits: string,
    gitUrl: string,
    gitHash: string,
    buildDate: string | null,
    gitCommit: string | null,
    dockerImageTag: string | null,
    buildHostName: string | null,
    hyperlinks:  {
      __typename: "ModelShepherdHrefConnection",
      items:  Array< {
        __typename: "ShepherdHref",
        title: string,
        url: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    herdSpec:  {
      __typename: "HerdSpec",
      key: string,
      image: string,
      imagetag: string,
      description: string,
    } | null,
    deploymentStates:  {
      __typename: "ModelDeploymentStateConnection",
      items:  Array< {
        __typename: "DeploymentState",
        new: boolean | null,
        key: string | null,
        modified: boolean | null,
        operation: string | null,
        version: string | null,
        lastVersion: string,
        timestamp: string,
        signature: string | null,
        env: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateShepherdMetadataSubscription = {
  onUpdateShepherdMetadata:  {
    __typename: "ShepherdMetadata",
    displayName: string,
    deploymentType: DeploymentType,
    dbMigrationImage: string | null,
    lastCommits: string,
    gitUrl: string,
    gitHash: string,
    buildDate: string | null,
    gitCommit: string | null,
    dockerImageTag: string | null,
    buildHostName: string | null,
    hyperlinks:  {
      __typename: "ModelShepherdHrefConnection",
      items:  Array< {
        __typename: "ShepherdHref",
        title: string,
        url: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    herdSpec:  {
      __typename: "HerdSpec",
      key: string,
      image: string,
      imagetag: string,
      description: string,
    } | null,
    deploymentStates:  {
      __typename: "ModelDeploymentStateConnection",
      items:  Array< {
        __typename: "DeploymentState",
        new: boolean | null,
        key: string | null,
        modified: boolean | null,
        operation: string | null,
        version: string | null,
        lastVersion: string,
        timestamp: string,
        signature: string | null,
        env: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteShepherdMetadataSubscription = {
  onDeleteShepherdMetadata:  {
    __typename: "ShepherdMetadata",
    displayName: string,
    deploymentType: DeploymentType,
    dbMigrationImage: string | null,
    lastCommits: string,
    gitUrl: string,
    gitHash: string,
    buildDate: string | null,
    gitCommit: string | null,
    dockerImageTag: string | null,
    buildHostName: string | null,
    hyperlinks:  {
      __typename: "ModelShepherdHrefConnection",
      items:  Array< {
        __typename: "ShepherdHref",
        title: string,
        url: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    herdSpec:  {
      __typename: "HerdSpec",
      key: string,
      image: string,
      imagetag: string,
      description: string,
    } | null,
    deploymentStates:  {
      __typename: "ModelDeploymentStateConnection",
      items:  Array< {
        __typename: "DeploymentState",
        new: boolean | null,
        key: string | null,
        modified: boolean | null,
        operation: string | null,
        version: string | null,
        lastVersion: string,
        timestamp: string,
        signature: string | null,
        env: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateShepherdHrefSubscription = {
  onCreateShepherdHref:  {
    __typename: "ShepherdHref",
    title: string,
    url: string,
    metadata:  {
      __typename: "ShepherdMetadata",
      displayName: string,
      deploymentType: DeploymentType,
      dbMigrationImage: string | null,
      lastCommits: string,
      gitUrl: string,
      gitHash: string,
      buildDate: string | null,
      gitCommit: string | null,
      dockerImageTag: string | null,
      buildHostName: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
      herdSpec:  {
        __typename: "HerdSpec",
        key: string,
        image: string,
        imagetag: string,
        description: string,
      } | null,
      deploymentStates:  {
        __typename: "ModelDeploymentStateConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateShepherdHrefSubscription = {
  onUpdateShepherdHref:  {
    __typename: "ShepherdHref",
    title: string,
    url: string,
    metadata:  {
      __typename: "ShepherdMetadata",
      displayName: string,
      deploymentType: DeploymentType,
      dbMigrationImage: string | null,
      lastCommits: string,
      gitUrl: string,
      gitHash: string,
      buildDate: string | null,
      gitCommit: string | null,
      dockerImageTag: string | null,
      buildHostName: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
      herdSpec:  {
        __typename: "HerdSpec",
        key: string,
        image: string,
        imagetag: string,
        description: string,
      } | null,
      deploymentStates:  {
        __typename: "ModelDeploymentStateConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteShepherdHrefSubscription = {
  onDeleteShepherdHref:  {
    __typename: "ShepherdHref",
    title: string,
    url: string,
    metadata:  {
      __typename: "ShepherdMetadata",
      displayName: string,
      deploymentType: DeploymentType,
      dbMigrationImage: string | null,
      lastCommits: string,
      gitUrl: string,
      gitHash: string,
      buildDate: string | null,
      gitCommit: string | null,
      dockerImageTag: string | null,
      buildHostName: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
      herdSpec:  {
        __typename: "HerdSpec",
        key: string,
        image: string,
        imagetag: string,
        description: string,
      } | null,
      deploymentStates:  {
        __typename: "ModelDeploymentStateConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateDeploymentStateSubscription = {
  onCreateDeploymentState:  {
    __typename: "DeploymentState",
    deployment:  {
      __typename: "ShepherdMetadata",
      displayName: string,
      deploymentType: DeploymentType,
      dbMigrationImage: string | null,
      lastCommits: string,
      gitUrl: string,
      gitHash: string,
      buildDate: string | null,
      gitCommit: string | null,
      dockerImageTag: string | null,
      buildHostName: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
      herdSpec:  {
        __typename: "HerdSpec",
        key: string,
        image: string,
        imagetag: string,
        description: string,
      } | null,
      deploymentStates:  {
        __typename: "ModelDeploymentStateConnection",
        nextToken: string | null,
      } | null,
    } | null,
    new: boolean | null,
    key: string | null,
    modified: boolean | null,
    operation: string | null,
    version: string | null,
    lastVersion: string,
    timestamp: string,
    signature: string | null,
    env: string | null,
  } | null,
};

export type OnUpdateDeploymentStateSubscription = {
  onUpdateDeploymentState:  {
    __typename: "DeploymentState",
    deployment:  {
      __typename: "ShepherdMetadata",
      displayName: string,
      deploymentType: DeploymentType,
      dbMigrationImage: string | null,
      lastCommits: string,
      gitUrl: string,
      gitHash: string,
      buildDate: string | null,
      gitCommit: string | null,
      dockerImageTag: string | null,
      buildHostName: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
      herdSpec:  {
        __typename: "HerdSpec",
        key: string,
        image: string,
        imagetag: string,
        description: string,
      } | null,
      deploymentStates:  {
        __typename: "ModelDeploymentStateConnection",
        nextToken: string | null,
      } | null,
    } | null,
    new: boolean | null,
    key: string | null,
    modified: boolean | null,
    operation: string | null,
    version: string | null,
    lastVersion: string,
    timestamp: string,
    signature: string | null,
    env: string | null,
  } | null,
};

export type OnDeleteDeploymentStateSubscription = {
  onDeleteDeploymentState:  {
    __typename: "DeploymentState",
    deployment:  {
      __typename: "ShepherdMetadata",
      displayName: string,
      deploymentType: DeploymentType,
      dbMigrationImage: string | null,
      lastCommits: string,
      gitUrl: string,
      gitHash: string,
      buildDate: string | null,
      gitCommit: string | null,
      dockerImageTag: string | null,
      buildHostName: string | null,
      hyperlinks:  {
        __typename: "ModelShepherdHrefConnection",
        nextToken: string | null,
      } | null,
      herdSpec:  {
        __typename: "HerdSpec",
        key: string,
        image: string,
        imagetag: string,
        description: string,
      } | null,
      deploymentStates:  {
        __typename: "ModelDeploymentStateConnection",
        nextToken: string | null,
      } | null,
    } | null,
    new: boolean | null,
    key: string | null,
    modified: boolean | null,
    operation: string | null,
    version: string | null,
    lastVersion: string,
    timestamp: string,
    signature: string | null,
    env: string | null,
  } | null,
};
