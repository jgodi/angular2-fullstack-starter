import {bootstrap} from 'angular2/bootstrap';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

// include for production builds
import {enableProdMode} from 'angular2/core';

import {MyApp} from './components/app/app';

// Main style import
import './assets/styles/main.scss';

enableProdMode(); // include for production builds
function main() {
    return bootstrap(MyApp, [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy})
    ]).catch(err => console.error(err)); // eslint-disable-line
}

document.addEventListener('DOMContentLoaded', main);
