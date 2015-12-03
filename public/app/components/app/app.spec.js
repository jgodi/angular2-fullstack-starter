import {beforeEachProviders, describe, expect, inject, it} from 'angular2/testing';
import {provide} from 'angular2/angular2';
import {MockBackend, BaseRequestOptions, Http} from 'angular2/http';

import {MyApp} from './app';
import {TodoService} from '../../services/todo';

describe('App', () => {
    // Provide our implementations or mocks to the dependency injector
    beforeEachProviders(() => [
        MyApp,
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

    it('should have a greeting', inject([MyApp], (app) => {
        expect(app.greeting).toEqual('Hello :)');
    }));
});
