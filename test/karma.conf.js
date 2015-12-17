var path = require('path'); // eslint-disable-line

module.exports = function (config) {
    config.set({
        basePath: '',

        frameworks: ['jasmine'],

        files: [
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
            require('karma-sourcemap-loader'),
            require('karma-mocha-reporter')
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
                    {test: /\.js$/, loader: 'babel', exclude: /(node_modules)/},
                    {test: /\.(png|woff|ttf)(\?.*)?$/, loader: 'url-loader?limit=1000000'},
                    {test: /\.scss$/, loaders: ['style', 'css', 'sass']}
                ],
                noParse: [/angular2\/bundles\/.+/]
            },

            // Sass loader configuration to tell webpack where to find the additional SASS files
            // https://github.com/jtangelder/sass-loader#sass-options
            sassLoader: {
                includePaths: [
                    path.resolve(__dirname, 'node_modules', 'src', 'styles')
                ]
            },
            stats: {colors: true, reasons: true},
            debug: false
        },

        webpackServer: {
            noInfo: true
        },

        reporters: ['mocha'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};
