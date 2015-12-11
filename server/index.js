/*eslint-disable */
require('babel/register');
require('./server');

// If we are in development, make sure to start the WebpackDevServer
var isProduction = process.env.NODE_ENV === 'production';
if (!isProduction) {
    require('./bundler')();
}
/*eslint-enable */
