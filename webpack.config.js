var path = require('path'),
    pkg = require('./package.json'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanPlugin = require('clean-webpack-plugin');

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
    entry: [
        'es6-shim',
        'reflect-metadata',
        'zone.js',
        'angular2/angular2',
        path.join(__dirname, 'public', 'app', 'bootstrap.js')
    ],
    output: {
        path: path.join(__dirname, 'public', 'bundle'),
        filename: 'dev-bundle.js',
        publicPath: 'bundle/',
        pathinfo: true
    },
    module: {
        preLoaders: [
            {test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/}
        ],
        loaders: [
            {test: /\.html$/, loader: 'raw'},
            {
                test: /\.js$/,
                loader: 'awesome-typescript',
                query: {
                    'doTypeCheck': false,
                    'useWebpackText': true
                },
                exclude: /(node_modules|.spec.js)/
            },
            {
                test: /\.ts$/,
                loader: 'awesome-typescript',
                exclude: /(node_modules|.spec.ts)/
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'autoprefixer?' + JSON.stringify(autoprefixerOptions), 'sass']
            },
            // Any png-image or woff-font below or equal to 100K will be converted
            // to inline base64 instead
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
        new CleanPlugin('public/bundle'),
        new HtmlWebpackPlugin({
            filename: '../../server/views/index.html',
            pkg: pkg,
            template: path.join(__dirname, 'server', 'views', 'index.template.html')
        })
    ]
};
