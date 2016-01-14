import {TestComponentBuilder, describe, expect, inject, it, AsyncTestCompleter, beforeEachProviders} from 'angular2/testing_internal';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';

import {About} from './about';

@Component({
    template: '<about></about>',
    directives: [About]
})
class TestComponent {
}

describe('Component: About', () => {
    beforeEachProviders(() => []);

    it('renders', inject([TestComponentBuilder, AsyncTestCompleter], (tcb, async) => {
        tcb.createAsync(TestComponent)
            .then((fixture) => {
                fixture.detectChanges();

                // Test Component (above) - Instance / Element
                const instance = fixture.debugElement.componentInstance;
                const element = fixture.debugElement.nativeElement;

                // About Component - Instance / Element
                const componentElement = fixture.debugElement.componentViewChildren[0].nativeElement;
                const componentInstance = fixture.debugElement.componentViewChildren[0].componentInstance;

                // Make sure we have everything that we need
                expect(instance).toBeDefined();
                expect(element).toBeDefined();
                expect(componentElement).toBeDefined();
                expect(componentInstance).toBeDefined();

                // Check instance properties
                expect(componentInstance.title).toEqual('About Page');

                // Check rendering
                expect(DOM.querySelector(componentElement, 'h1').innerText).toEqual('About Page');
                expect(DOM.querySelector(componentElement, 'p.about').innerText).toEqual('This is the about page!!');

                async.done();
            })
            .catch((e) => console.error(e)); // eslint-disable-line
    }));
});
