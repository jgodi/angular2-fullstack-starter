import {Component, ElementRef} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Location, AsyncRoute} from 'angular2/router';

import {Home} from '../home/home';
import {About} from '../about/about';

@Component({
    selector: 'app',
    templateUrl: 'components/app/app.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    new AsyncRoute({
        path: '/',
        loader: () => System.import('./components/home/home').then(m => m.Home),
        name: 'Home'
    }),
    new AsyncRoute({
        path: '/about',
        loader: () => System.import('./components/about/about').then(m => m.About),
        name: 'About'
    })
])
export class MyApp {
    constructor(el:ElementRef, location:Location) {
        this.location = location;
        this.title = 'Angular2 Fullstack Starter';

        const nativeElement = el.nativeElement;
        this.env = nativeElement.getAttribute('env');
        this.port = nativeElement.getAttribute('port');
        this.mockConfigId = nativeElement.getAttribute('mockConfigId');
    }

    aboutActive() {
        return this.location.path() === '/about';
    }

    homeActive() {
        return this.location.path() === '';
    }
}
