import {Router} from 'express';

const todos = [
    {id: 1, name: 'Todo #1'},
    {id: 2, name: 'Todo #2'}
];

export default function () {
    const middleware = Router();

    middleware.route('/todos')
        .get((req, res) => {
            console.log('CALLING GET FOR TODOS'); // eslint-disable-line
            res.json(todos);
        })
        .post((req, res) => {
            console.log('CALLING POST FOR TODOS', req.body); // eslint-disable-line
            const todo = req.body;
            if (todo) {
                todo.push(todo);
                res.json(todo);
            } else {
                res.end();
            }
        });

    return middleware;
}
