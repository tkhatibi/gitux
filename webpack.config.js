var config = require('./src/common/config').default
var webpack = require('webpack')

var PROD = (process.env.PROD_ENV || 'dev') === 'prod'

module.exports = {
  entry: './src/browser/index.js',
  output: {
    path: config.assets.path,
    filename: PROD ? 'bundle.min.js' : 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
      },
    ],
  },
  plugins: PROD
    ? [
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
      })
    ] 
    : []
}
