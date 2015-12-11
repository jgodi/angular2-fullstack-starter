var path = require('path'),
    webpack = require('webpack'),
    pkg = require('./package.json'),
    extend = require('util')._extend,
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpackConfig = require('./webpack.config.js'),
    CleanPlugin = require('clean-webpack-plugin');

module.exports = extend(webpackConfig, {
    entry: [
        // Major dependencies
        'es6-shim',
        'reflect-metadata',
        'zone.js',
        'angular2/angular2',
        path.join(__dirname, 'public', 'app', 'bootstrap.js')
    ],
    output: {
        path: path.join(__dirname, 'public', 'bundle'),
        filename: 'prod-bundle-[hash:6].js',
        publicPath: 'bundle/',
        pathinfo: true
    },
    plugins: [
        new CleanPlugin('public/bundle'),
        new HtmlWebpackPlugin({
            filename: '../../server/views/index.html',
            pkg: pkg,
            template: path.join(__dirname, 'server', 'views', 'index.template.html')
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ]
});
