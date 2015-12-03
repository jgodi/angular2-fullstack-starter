import {Component} from 'angular2/angular2';

@Component({
    selector: 'app-header',
    template: require('./header.html')
})
export class Header {
    constructor() {
        this.title = 'Angular 2 Fullstack Starter';
    }
}
