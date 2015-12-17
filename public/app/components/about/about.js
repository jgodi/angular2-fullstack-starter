import {Component} from 'angular2/core';

@Component({
    selector: 'about',
    template: require('./about.html')
})
export class About {
    constructor() {
        this.title = 'About Page';
    }
}
