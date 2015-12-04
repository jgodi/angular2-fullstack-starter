import {TestComponentBuilder, describe, expect, injectAsync, it, beforeEachProviders} from 'angular2/testing';
import {Component, provide} from 'angular2/angular2';
import {MockBackend, BaseRequestOptions, Http} from 'angular2/http';

import {Home} from './home';
import {TodoService} from '../../services/todo';

describe('Home Component', () => {
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

    it('should work', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
        return tcb.overrideTemplate(TestComponent, '<div><home></home></div>')
            .createAsync(TestComponent)
            .then((rootTC) => {
                rootTC.detectChanges();

                let instance = rootTC.debugElement.componentViewChildren[0].componentInstance;
                expect(instance.title).toEqual('Home Page');
            });
    }));
});

@Component({selector: 'test-cmp', directives: [Home], template: ''})
class TestComponent {
}
