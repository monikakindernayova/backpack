const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    base: './base.scss'
  },

  output: {
    filename: 'base.js',
    path: ''
  },

  module: {
    loaders: [
      {
        test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
      },
      {
        test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  postcss: function () {
    return [ autoprefixer({ browsers: [ 'last 20 versions' ] }) ]
  }
}