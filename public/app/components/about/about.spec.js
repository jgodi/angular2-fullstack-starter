import {TestComponentBuilder, describe, expect, injectAsync, it} from 'angular2/testing';
import {Component} from 'angular2/angular2';

import {About} from './about';

describe('About Component', () => {
    it('should work', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
        return tcb.overrideTemplate(TestComponent, '<div><about></about></div>')
            .createAsync(TestComponent)
            .then((rootTC) => {
                rootTC.detectChanges();

                let instance = rootTC.debugElement.componentViewChildren[0].componentInstance;
                expect(instance.title).toEqual('About Page');
            });
    }));
});

@Component({selector: 'test-cmp', directives: [About], template: ''})
class TestComponent {
}
