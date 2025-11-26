const path = require('path');

module.exports = {
  experimental: {
    turbo: {
      enabled: false  // Disable Turbopack
    }
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '.');
    return config;
  }
};