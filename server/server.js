// Express
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import httpProxy from 'http-proxy';

// Custom API / Middleware
import middleware from './middleware/index';
import todos from './middleware/todos';

// Config
import config from './config';
const PORT = config.get('port');
const ENV = config.get('env');

// Configure Express
const app = express();

// Logging
app.use(morgan('dev'));

// Accept Content-Type
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// CORs
app.use(cors());

// Internal middleware
app.use(middleware());

// API
app.use('/api', todos());

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Static files
app.use(express.static(path.resolve(__dirname + '/../public')));

// Proxy to proxy files from the WebpackDevServer while in development
if (ENV === 'development') {
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

// Start the server by listening on a port
app.listen(config.get('port'), function () {
    console.log(`Listening on http://localhost:${PORT} with the ${ENV} config loaded!`); // eslint-disable-line
});
