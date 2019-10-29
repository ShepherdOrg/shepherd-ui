const { resolve } = require('path')
const fs = require('fs')
const Either = require('data.either')

const readFileSync = Either.try(fs.readFileSync)

const fromEntries = entries =>
  entries.reduce((p, v) => {
    p[v[0]] = v[1]
    return p
  }, {})

const env = fromEntries(
  Object.entries(process.env).filter(
    ([key]) => key.startsWith('HASURA') || key.startsWith('SHEPHERD')
  )
)

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
