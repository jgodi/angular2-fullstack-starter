import {Component} from 'angular2/angular2';

@Component({
    selector: 'about',
    template: require('./about.html')
})
export class About {
    constructor() {
        this.title = 'About Page';
    }
}
