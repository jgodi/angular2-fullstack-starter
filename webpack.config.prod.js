var path = require('path'),
    webpack = require('webpack'),
    pkg = require('./package.json'),
    extend = require('util')._extend,
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpackConfig = require('./webpack.config.js');

module.exports = extend(webpackConfig, {
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../../server/views/index.html',
            pkg: pkg,
            template: path.join(__dirname, 'public', 'index.html')
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
});
