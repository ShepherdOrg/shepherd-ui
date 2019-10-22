// import 'cross-fetch/polyfill'
import awsconfig from './aws-exports'
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync'

let client: AWSAppSyncClient<any>

export default () => {
  if (!client) {
    client = new AWSAppSyncClient({
      url: awsconfig.aws_appsync_graphqlEndpoint,
      region: awsconfig.aws_appsync_region,
      auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: awsconfig.aws_appsync_apiKey,
      },
    })
  }
  return client
}
