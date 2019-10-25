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
