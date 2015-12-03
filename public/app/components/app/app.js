import {Component, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';

import {Header} from '../header/header';
import {TodoService} from '../../services/todo';

@Component({
    selector: 'app',
    template: require('./app.html'),
    directives: [Header, CORE_DIRECTIVES],
    providers: [TodoService]
})
export class MyApp {
    constructor(todoService:TodoService) {
        this.todoService = todoService;
        this.greeting = 'Hello :)';
    }

    onInit() {
        this.todoService.getTodos()
            .map(res => res.json())
            .subscribe(data => {
                console.log('TODO DATA:', data);
                this.todos = data;
            });
    }
}
