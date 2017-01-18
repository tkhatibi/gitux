var webpack = require('webpack')

var PROD = (process.env.PROD_ENV || 'dev') === 'prod'

module.exports = {
  entry: './src/app.web.js',
  output: {
    path: __dirname + '/src/server/public',
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
