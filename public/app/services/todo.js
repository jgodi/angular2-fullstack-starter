import {Injectable} from 'angular2/angular2';
import {Http, Headers} from 'angular2/http';

const BASE_URL = 'http://localhost:3000';
const TODO_API_URL = '/api/todos';

@Injectable()
export class TodoService {
    constructor(http:Http) {
        this.http = http;
    }

    getTodos() {
        const JSON_HEADERS = new Headers();
        JSON_HEADERS.append('Accept', 'application/json');
        JSON_HEADERS.append('Content-Type', 'application/json');

        return this.http.get(BASE_URL + TODO_API_URL, {headers: JSON_HEADERS});
    }
}
