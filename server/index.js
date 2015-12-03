// Express
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

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

// Start the server by listening on a port
app.listen(config.get('port'), function () {
    console.log(`Listening on http://localhost:${PORT} with the ${ENV} config loaded!`);// eslint-disable-line
});
