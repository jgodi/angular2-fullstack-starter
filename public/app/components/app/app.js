import {Component} from 'angular2/angular2';
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
    constructor(location:Location) {
        this.location = location;
        this.title = 'Angular 2 Fullstack Starter';
    }

    aboutActive() {
        return this.location.path() === '/about';
    }

    homeActive() {
        return this.location.path() === '';
    }
}
