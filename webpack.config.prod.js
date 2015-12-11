var path = require('path'),
    webpack = require('webpack'),
    extend = require('util')._extend,
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
        filename: 'bundle.js'
    },
    plugins: [
        new CleanPlugin('public/bundle'),
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
