const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanDist = require('clean-webpack-plugin');

module.exports = {
  entry:{
    "app":"./src/index.js"
  },
  output:{
    filename:"[name].js",
    path:path.resolve(__dirname, "dist")
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },
  devtool:"inline-source-map",
  devServer:{
    contentBase:path.join(__dirname, "dist"),
    hot: true
  },
  plugins:[
    new CleanDist(['dist']),
    new HtmlWebpackPlugin({
      title:"webpack test"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  mode:"development"
}