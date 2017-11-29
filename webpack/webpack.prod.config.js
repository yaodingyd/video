const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const baseConfig = require('./webpack.base.config')
const rootPath = require('../config').rootPath

module.exports = merge(baseConfig, {
  output: {
    path: path.resolve(rootPath, 'dist'),
    filename: 'bundle.js'
  },
  entry: path.resolve(rootPath, 'src/index.js'),
  devtool: 'sourcemap',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    })
  ]
})
