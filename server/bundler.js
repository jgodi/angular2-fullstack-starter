import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import WebpackConfig from './../webpack.config';
import httpProxy from 'http-proxy';

import path from 'path';

export default function (app) {
    let bundleStartTime = null;

    // Inform the user on the status of webpacking
    let compiler = Webpack(WebpackConfig);
    compiler.plugin('compile', () => {
        console.log('Bundling the project...'); // eslint-disable-line
        bundleStartTime = Date.now();
    });
    compiler.plugin('done', () => {
        console.log('Bundling finished in ' + (Date.now() - bundleStartTime) + 'ms!'); // eslint-disable-line
    });

    let bundler = new WebpackDevServer(compiler, {
        // Set the content base, where the files are served from
        contentBase: path.join(__dirname, 'public'),

        // Tell Webpack to serve our bundled application from the assets path. When proxying:
        // http://localhost:3000/assets -> http://localhost:8080/assets
        publicPath: '/bundle/',

        // Configure hot replacement
        hot: true,

        historyApiFallback: false,

        // Terminal configuration
        inline: true,
        quiet: false,
        noInfo: true,
        stats: {
            colors: true
        }
    });

    // We fire up the development server and give notice in the terminal
    // that we are starting the initial bundle
    bundler.listen(3001, 'localhost', function () {
        console.log('Bundling up the project, sit tight!'); // eslint-disable-line
    });

    // Create a proxy to serve files to the app server from the webpack dev server
    const proxy = httpProxy.createProxyServer();

    // Any requests to localhost:3000/assets is proxied
    // to webpack-dev-server
    app.all(['/bundle/*', '*.hot-update.json'], function (req, res) {
        proxy.web(req, res, {
            target: 'http://localhost:3001'
        });
    });

    proxy.on('error', function () {
        console.log('Could not connect to proxy, stop/restart the server.'); // eslint-disable-line
    });
}
