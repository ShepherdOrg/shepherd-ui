const { resolve } = require('path')

const nextConfig = {
  webpack(config, options) {
    // For absolute path imports
    config.resolve.alias['components'] = resolve(__dirname, 'components')
    config.resolve.alias['src'] = resolve(__dirname, 'src')
    config.resolve.alias['pages'] = resolve(__dirname, 'pages')
    config.resolve.alias['utils'] = resolve(__dirname, 'utils')

    return config
  },
}

module.exports = nextConfig
