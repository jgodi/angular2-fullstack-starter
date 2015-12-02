import {Router} from 'express';

let todos = [
    {id: 1, name: 'Todo #1'},
    {id: 2, name: 'Todo #2'}
];

export default function () {
    const middleware = Router();

    middleware.route('/todos')
        .get((req, res) => {
            console.log('GET: todos');
            res.json(todos);
        })
        .post((req, res) => {
            console.log('POST: todos', req.body);
            var todo = req.body;
            if (todo) {
                todo.push(todo);
                res.json(todo);
            } else {
                res.end();
            }
        });

    return middleware;
}
