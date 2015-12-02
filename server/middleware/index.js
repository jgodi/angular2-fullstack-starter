import {Router} from 'express';

export default function () {
    const middleware = Router();

    middleware.get('/', function (request, response) {
        response.render('index.html');
    });

    return middleware;
}
