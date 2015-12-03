import {beforeEachProviders, describe, expect, inject, it} from 'angular2/testing';

import {About} from './about';

describe('About Component', () => {
    // Provide our implementations or mocks to the dependency injector
    beforeEachProviders(() => [
        About
    ]);

    it('should have a title', inject([About], (about) => {
        expect(about.title).toEqual('About Page');
    }));
});
