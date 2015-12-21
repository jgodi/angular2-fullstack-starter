var path = require('path'),
    webpack = require('webpack'),
    extend = require('util')._extend,
    webpackConfig = require('./webpack.config.js'),
    CleanPlugin = require('clean-webpack-plugin');

module.exports = extend(webpackConfig, {
    debug: false,
    devtool: 'eval',
    entry: {
        'app': path.join(__dirname, 'public', 'app', 'bootstrap.prod.js'),
        'vendor': path.join(__dirname, 'public', 'app', 'vendor.prod.js')
    },
    plugins: [
        new CleanPlugin('public/bundle'),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
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
