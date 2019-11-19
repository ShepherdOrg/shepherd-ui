const { resolve } = require('path')

const env = {
  HASURA_ENDPOINT_URL: process.env.HASURA_ENDPOINT_URL,
}

const nextConfig = {
  env,
  publicRuntimeConfig: env,
  webpack(config, options) {
    // For absolute path imports
    config.resolve.alias['components'] = resolve(__dirname, 'components')
    config.resolve.alias['src'] = resolve(__dirname, 'src')
    config.resolve.alias['pages'] = resolve(__dirname, 'pages')
    config.resolve.alias['gql'] = resolve(__dirname, 'gql')
    config.resolve.alias['utils'] = resolve(__dirname, 'utils')

    return config
  },
}

module.exports = nextConfig
