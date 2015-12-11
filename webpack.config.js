var path = require('path'),
    webpack = require('webpack');

var autoprefixerOptions = {
    browsers: [
        'last 2 versions',
        'iOS >= 7',
        'Android >= 4',
        'Explorer >= 10',
        'ExplorerMobile >= 11'
    ],
    cascade: false
};

module.exports = {
    devtool: 'eval',
    entry: [
        // For hot style updates
        'webpack/hot/dev-server',

        // The script refreshing the browser on none hot updates
        'webpack-dev-server/client?http://localhost:3001',

        // Major dependencies
        'es6-shim',
        'reflect-metadata',
        'zone.js',
        'angular2/angular2',
        path.join(__dirname, 'public', 'app', 'bootstrap.js')
    ],
    output: {
        path: path.join(__dirname, 'public', 'bundle'),
        filename: 'dev-bundle.js'
    },
    module: {
        preLoaders: [
            {test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/}
        ],
        loaders: [
            {test: /\.html$/, loader: 'raw'},
            {test: /\.js$/, loader: 'babel', exclude: /(node_modules|.spec.js)/},
            {test: /\.scss$/, loaders: ['style', 'css', 'autoprefixer?' + JSON.stringify(autoprefixerOptions), 'sass']},
            {test: /\.(png|woff|ttf)(\?.*)?$/, loader: 'url-loader?limit=1000000'}
        ]
    },
    resolve: {
        modulesDirectories: [
            'node_modules'
        ],
        extensions: ['', '.js', '.ts']
    },
    // Sass loader configuration to tell webpack where to find the additional SASS files
    // https://github.com/jtangelder/sass-loader#sass-options
    sassLoader: {
        includePaths: [
            path.resolve(__dirname, 'node_modules', 'dist', 'src', 'scss')
        ]
    },
    eslint: {
        formatter: require('eslint-friendly-formatter')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
