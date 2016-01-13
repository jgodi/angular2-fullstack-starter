import {TestComponentBuilder, describe, expect, injectAsync, xit, beforeEachProviders} from 'angular2/testing';
import {Component, provide, DirectiveResolver} from 'angular2/core';

import {Location, Router, RouteRegistry} from 'angular2/router';
import {SpyLocation} from 'angular2/src/mock/location_mock';
import {RootRouter} from 'angular2/src/router/router';

import {MyApp} from './app';

describe('App Component', () => {
    beforeEachProviders(() => [
        RouteRegistry,
        DirectiveResolver,
        provide(Location, {useClass: SpyLocation}),
        provide(Router, {
            useFactory: (registry, location) => {
                return new RootRouter(registry, location, MyApp);
            },
            deps: [RouteRegistry, Location]
        })
    ]);

    xit('should work', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
        return tcb.overrideTemplate(TestComponent, '<div><app env="test"></app></div>')
            .createAsync(TestComponent)
            .then((rootTC) => {
                rootTC.detectChanges();

                let appInstance = rootTC.debugElement.componentViewChildren[0].componentInstance;
                expect(appInstance.title).toEqual('Angular2 Fullstack Starter');
            });
    }));
});

@Component({selector: 'test-cmp', directives: [MyApp], template: ''})
class TestComponent {
}
