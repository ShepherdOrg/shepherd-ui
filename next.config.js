const { resolve } = require('path')
const dotenv = require('dotenv')
const withCSS = require('@zeit/next-css')
const fs = require('fs')
const Either = require('data.either')

const readFileSync = Either.try(fs.readFileSync)

const env = readFileSync('./.env')
  .chain(Either.try(dotenv.parse))
  .fold(err => process.env, x => x)

const nextConfig = withCSS({
  env,
  webpack(config, options) {
    // For absolute path imports
    config.resolve.alias['components'] = resolve(__dirname, 'components')
    config.resolve.alias['src'] = resolve(__dirname, 'src')
    config.resolve.alias['pages'] = resolve(__dirname, 'pages')
    config.resolve.alias['utils'] = resolve(__dirname, 'utils')

    return config
  },
})

module.exports = nextConfig
