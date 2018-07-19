const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    plugins:[
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.HashedModuleIdsPlugin(), //控制 vender manifest hash值变化
    ],
    mode:"production"
})