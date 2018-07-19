const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const BundleAnalyzePlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
    //devtool:"inline-source-map",
    devServer:{
        contentBase:path.join(__dirname, "dist"),
        hot: true
    },
    plugins:[
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        //new BundleAnalyzePlugin()
    ],
    mode:"development"
});