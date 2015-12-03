import {describe, expect, injectAsync, TestComponentBuilder, it} from 'angular2/testing';
import {Component} from 'angular2/angular2';
import {DOM} from 'angular2/src/core/dom/dom_adapter';

import {Header} from './header';

@Component({
    template: '',
    directives: [Header]
})
class TestComponent {
}

describe('Header Component', () => {
    it('should should work', injectAsync([TestComponentBuilder], (tcb) => {
        return tcb.overrideTemplate(TestComponent, '<app-header></app-header>')
            .createAsync(TestComponent).then((fixture) => {
                fixture.detectChanges();

                const headerInstance = fixture.debugElement.componentViewChildren[0].componentInstance;
                const headerElement = fixture.debugElement.componentViewChildren[0].nativeElement;

                expect(headerInstance.title).toBe('Angular 2 Fullstack Starter');
                expect(DOM.querySelectorAll(headerElement, 'header').length).toEqual(1);
            });
    }));
});
