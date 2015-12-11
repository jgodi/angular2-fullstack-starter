import {Router} from 'express';
import config from '../config';

export default function () {
    const middleware = Router();

    middleware.get('/', function (request, response) {
        // TODO - jgodi - find out a better way to load this up! (HtmlWebpackPlugin doesn't work with WebpackDevServer)
        if (config.get('env') === 'development') {
            response.render('index.dev.html', {
                env: config.get('env'),
                port: config.get('port'),
                mockConfigId: config.get('myapp.mockConfigId')
            });
        } else {
            response.render('index.html', {
                env: config.get('env'),
                port: config.get('port'),
                mockConfigId: config.get('myapp.mockConfigId')
            });
        }
    });

    return middleware;
}
