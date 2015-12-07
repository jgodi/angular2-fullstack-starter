import {describe, beforeEach, expect, it, inject, injectAsync, beforeEachProviders, AsyncTestCompleter} from 'angular2/testing';
import {provide} from 'angular2/angular2';
import {Http, Response, MockBackend, BaseRequestOptions} from 'angular2/http';

import {TodoService} from './todo';

let MOCK_TODOS = [
    {id: 1, name: 'Mock 1'},
    {id: 2, name: 'Mock 2'}
];

describe('Todo Service', () => {
    beforeEachProviders(() => [
        BaseRequestOptions,
        MockBackend,
        provide(Http, {
            useFactory: function (backend, defaultOptions) {
                return new Http(backend, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions]
        }),
        provide(TodoService, {
            useFactory: function (http) {
                return new TodoService(http);
            },
            deps: [Http]
        })
    ]);

    xit('should work', inject([TodoService, MockBackend, AsyncTestCompleter], (todoService, backend, async) => {
        let connection;
        backend.connections.subscribe(c => connection = c);

        todoService.getTodos().subscribe((res) => {
            expect(res.json()[0].id).toBe(1);
            async.done();
        });

        connection.mockRespond(new Response({body: MOCK_TODOS}));
    }));
});
