import {
  GQLdeployment_versions,
  GQLdeployments,
} from '@shepherdorg/shepherd-ui-api'

export interface Href {
  url: string
  title: string
}

export interface Configuration {
  key: string
  value: string
  isSecret: boolean
}

export interface KubernetesConfigurationFile {
  path: string
  content: string
}

export interface Deployment extends GQLdeployments {
  hyperlinks: Href[]
  deployment_versions: DeploymentVersion[]
}

export interface DeploymentVersion extends GQLdeployment_versions {
  kubernetes_deployment_files: KubernetesConfigurationFile[]
  configuration: Configuration[]
}

export interface DeploymentBranch {
  id: string
  name: string
  deploymentVersions: DeploymentVersion[]
  lastDeploymentTimestamp: Date
  livesUntil: Date
  isAlive: boolean
  isTemporary: boolean
  isMaster: boolean
}
