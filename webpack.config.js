var config = require('./src/common/config').default
var webpack = require('webpack')

var isProd = config.env === 'prod'

var plugins = []
// plugins.push(new webpack.HotModuleReplacementPlugin())
if (isProd) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false }
  }))
}

module.exports = {
  entry: [
    // 'webpack-dev-server/client?'+config.baseUrl, // WebpackDevServer host and port
    // 'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/browser/index.js',
  ],
  output: {
    path: config.assets.path,
    filename: isProd ? 'bundle.min.js' : 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot' ,'babel'],
      },
    ],
  },
  plugins: plugins,
}
