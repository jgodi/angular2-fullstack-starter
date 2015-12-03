var path = require('path');

module.exports = function (config) {
    config.set({
        basePath: '',

        frameworks: ['jasmine'],

        files: [
            {pattern: './public/lib/es6-shim.js', watched: false},
            {pattern: 'spec.bundle.js', watched: false}
        ],

        exclude: [],

        preprocessors: {
            'spec.bundle.js': ['webpack', 'sourcemap']
        },

        plugins: [
            require('karma-webpack'),
            require('karma-jasmine'),
            require('karma-phantomjs-launcher'),
            require('karma-sourcemap-loader')
        ],

        webpack: {
            resolve: {
                modulesDirectories: [
                    'node_modules'
                ],
                extensions: ['', '.js', '.ts']
            },
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {test: /\.html$/, loader: 'raw'},
                    {
                        test: /\.js$/,
                        loader: 'awesome-typescript',
                        query: {
                            'doTypeCheck': false,
                            'useWebpackText': true
                        },
                        exclude: /node_modules/
                    },
                    {
                        test: /\.ts$/,
                        loader: 'awesome-typescript',
                        exclude: /node_modules/
                    },
                    // Any png-image or woff-font below or equal to 100K will be converted
                    // to inline base64 instead
                    {test: /\.(png|woff|ttf)(\?.*)?$/, loader: 'url-loader?limit=1000000'}
                ]
            },
            stats: {colors: true, reasons: true},
            debug: false
        },

        webpackServer: {
            noInfo: true
        },

        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};
