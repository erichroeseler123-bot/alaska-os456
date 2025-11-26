// next.config.js
module.exports = {
  experimental: {
    turbo: false,  // Disable Turbopack for reliable alias resolution
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '.');
    return config;
  },
};