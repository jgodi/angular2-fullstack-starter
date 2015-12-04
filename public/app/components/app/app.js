import {Component, ElementRef} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, Location} from 'angular2/router';

import {Home} from '../home/home';
import {About} from '../about/about';

@Component({
    selector: 'app',
    template: require('./app.html'),
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', component: Home, as: 'Home'},
    {path: '/about', component: About, as: 'About'}
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
