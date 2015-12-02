// Webpack
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from '../webpack.config';

// Express
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

import middleware from './middleware/index';
import todos from './middleware/todos';

// Env
var PORT = process.env.PORT || 3001;
var NODE_ENV = process.env.NODE_ENV || 'development';

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

// Start the server by listening on a port
app.listen(PORT, function () {
    console.log('Listen on http://localhost:' + PORT + ' in ' + NODE_ENV);
});
