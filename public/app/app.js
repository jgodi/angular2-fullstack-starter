import {Component, bootstrap, ELEMENT_PROBE_PROVIDERS, CORE_DIRECTIVES} from 'angular2/angular2';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';

import {Header} from './header/header';
import './app.scss';

@Component({
    selector: 'app',
    templateUrl: 'app/app.html',
    directives: [Header, CORE_DIRECTIVES]
})
class MyApp {
    constructor(http:Http) {
        this.http = http;
    }

    onInit() {
        const BASE_URL = 'http://localhost:3001';
        const TODO_API_URL = '/api/todos';
        const JSON_HEADERS = new Headers();

        JSON_HEADERS.append('Accept', 'application/json');
        JSON_HEADERS.append('Content-Type', 'application/json');

        this.http
            .get(BASE_URL + TODO_API_URL, {
                headers: JSON_HEADERS
            })
            .subscribe(
                // onNext callback
                data => this.setData(data),
                // onError callback
                err  => this.errorMessage(err),
                // onComplete callback
                ()   => console.log('complete')
            );
    }

    setData(data) {
        console.log('Set Data: ', data);
        this.data = data;
    }

    errorMessage(err) {
        console.info('API Error: ', err);
    }
}

bootstrap(MyApp, [HTTP_PROVIDERS, ELEMENT_PROBE_PROVIDERS]);
