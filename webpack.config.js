var config = require('./src/common/config').default
var webpack = require('webpack')

var isProd = config.env === 'prod'

module.exports = {
  entry: './src/browser/index.js',
  output: {
    path: config.assets.path,
    filename: isProd ? 'bundle.min.js' : 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
      },
    ],
  },
  plugins: isProd
    ? [
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
      })
    ] 
    : []
}
