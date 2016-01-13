import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, COMMON_PIPES} from 'angular2/common';

import {TodoService} from '../../services/todo';

@Component({
    selector: 'home',
    template: require('./home.html'),
    directives: [CORE_DIRECTIVES],
    pipes: [COMMON_PIPES],
    providers: [TodoService]
})
export class Home {
    constructor(todoService:TodoService) {
        this.todoService = todoService;
        this.title = 'Home Page';
    }

    onInit() {
        this.todoService.getTodos()
            .map(res => res.json())
            .subscribe(data => {
                this.todos = data;
            });
    }
}
