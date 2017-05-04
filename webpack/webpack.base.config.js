'use strict'

const path = require('path')
const webpack = require('webpack')
const rootPath = require('../config').rootPath

module.exports = {
  output: {
    path: path.resolve(rootPath, 'dist'),
    filename: 'bundle.js',
    publicPath: '/tubeflix/'
  },
  resolve: {
    alias: {
      '@': path.resolve(rootPath, 'src')
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'standard-loader',
        exclude: /node_module/,
        enforce: 'pre',
        options: {
          parser: 'babel-eslint'
        }
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: [ 'style-loader', 'css-loader?modules', 'postcss-loader' ]
      }
    ]
  }
}
