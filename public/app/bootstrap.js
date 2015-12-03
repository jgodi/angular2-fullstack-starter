import {bootstrap, provide, ELEMENT_PROBE_PROVIDERS} from 'angular2/angular2';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {MyApp} from './components/app/app';

// Main style import
import './assets/styles/main.scss';

bootstrap(MyApp, [
    ROUTER_PROVIDERS,
    ELEMENT_PROBE_PROVIDERS,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
