// Express
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

import { ExpressCompiler } from 'express-compile';

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

app.use(ExpressCompiler({
  root: '.',
  cwd: 'public',
  paths: ['public/**/*'],
  ignore: ['public/node_modules/**/*'],
  disableStyleCache: true,
  compilerOpts: {
    js: {
      presets: ["es2015"],
      plugins: [
        "angular2-annotations",
        "transform-decorators-legacy",
        "transform-class-properties",
        "transform-flow-strip-types"
      ]
    }
  }
}));


// Accept Content-Type
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

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
app.use('/node_modules', express.static(path.resolve(__dirname + '/../node_modules')));

// Start the server by listening on a port
app.listen(PORT, function() {
  console.log(`Listening on http://localhost:${PORT} with the ${ENV} config loaded!`); // eslint-disable-line
});
