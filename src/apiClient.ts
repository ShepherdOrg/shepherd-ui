import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync'
import 'cross-fetch/polyfill'
import awsconfig from './aws-exports'

let client: AWSAppSyncClient<any>

export default () => {
  if (!client) {
    client = new AWSAppSyncClient({
      url: awsconfig.aws_appsync_graphqlEndpoint,
      region: awsconfig.aws_appsync_region,
      auth: {
        type: AUTH_TYPE.API_KEY, // or type: awsconfig.aws_appsync_authenticationType,
        apiKey: awsconfig.aws_appsync_apiKey,
      },
      offlineConfig: {
        keyPrefix: 'shepherdApi',
      },
    })
  }
  return client
}
