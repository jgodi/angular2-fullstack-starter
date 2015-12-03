import {Component} from 'angular2/angular2';

@Component({
    selector: 'app-header',
    templateUrl: 'app/components/header/header.html'
})
export class Header {
    constructor() {
        this.title = 'Angular 2 Fullstack Starter';
    }
}
