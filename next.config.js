const path = require('path');

module.exports = {
  experimental: {
    turbo: {
      resolveAlias: {
        '@/*': './*'
      }
    }
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  }
};