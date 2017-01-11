var webpack = require("webpack");
var path = require("path");

var SRC_DIR = path.resolve(__dirname, "src");

var config = {
  entry: SRC_DIR +'/index.js',

  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },

  devtool: 'inline-source-map',

  module: {
    loaders: [
      { test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react','stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ]
  },
}


module.exports = config;