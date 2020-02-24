const path = require('path');
const webpack = require('webpack');
const HTMLWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode = 'production',
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: '/\.js$/',
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: '/\.scss$/',
                use: [ 'sass-loader', 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets:false
        })

    ]
}