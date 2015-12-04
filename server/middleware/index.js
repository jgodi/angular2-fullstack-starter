import {Router} from 'express';
import config from '../config';

export default function () {
    const middleware = Router();

    middleware.get('/', function (request, response) {
        response.render('index.html', {
            env: config.get('env'),
            port: config.get('port'),
            mockConfigId: config.get('myapp.mockConfigId')
        });
    });

    return middleware;
}
