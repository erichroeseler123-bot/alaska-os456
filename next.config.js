const path = require('path');

module.exports = {
  experimental: {
    turbopack: false  // Disable Turbopack to ensure aliases work reliably
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  }
};