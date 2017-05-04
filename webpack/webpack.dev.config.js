const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const rootPath = require('../config').rootPath
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.resolve(rootPath, 'src/index.js')
  ],
  node: {
    fs: 'empty'
  },
  watch: true,
  devServer: {
    inline: true,
    hot: true,
    contentBase: path.resolve(rootPath, 'dist'),
    stats: {
      chunks: false,
      children: false,
      color: true
    }
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
