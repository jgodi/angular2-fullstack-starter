import {bootstrap} from 'angular2/bootstrap';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

// Include for development builds
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';

// include for production builds
// import {enableProdMode} from 'angular2/core';
// enableProdMode();

// Import our main app
import {MyApp} from './components/app/app';

// Our singleton services
import {TodoService} from './services/todo';

bootstrap(MyApp, [
    TodoService,
    ...ROUTER_PROVIDERS,
    ...ELEMENT_PROBE_PROVIDERS,  // remove in production
    ...HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]).catch(err => console.error(err)); // eslint-disable-line
