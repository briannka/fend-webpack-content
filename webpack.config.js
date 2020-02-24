const path = require('path');
const webpack = require('webpack');
const HTMLWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: '/\.js$/',
                exclude: /node_modules/,
                use: ["babel-loader", "eslint-loader"],
            }
        ]
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        })

    ]
}