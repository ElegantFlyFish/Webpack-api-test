const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        app:path.resolve(__dirname, './src/index.js'),
        meth:path.resolve(__dirname, './src/meth.js'),
    },
    output:{
        filename:'[name].[chunkhash].js',
        path:path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
          {
            test:/\.css$/,
            use:['style-loader','css-loader']
          }
        ]
    },
    optimization: { //webpack4.0 分包配置, 移除了commonChunkPlugin插件
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'Production',
        })
    ],

};