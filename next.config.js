//const path = require('path');
const withSass = require('@zeit/next-sass');
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");


module.exports = withSass({
  /* bydefault config  option Read For More Optios
  here https://github.com/vercel/next-plugins/tree/master/packages/next-sass*/
  cssModules: true
  })

module.exports = {
  /*sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },*/
  webpack: config => {
    if (!config.resolve.plugins) {
      config.resolve.plugins = [];
    }
    config.resolve.plugins.push(new TsconfigPathsPlugin());
    return config;
  },
  future: {
    webpack5: true,
  },
}