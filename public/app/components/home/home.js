import {Component} from 'angular2/angular2';

import {TodoService} from '../../services/todo';

@Component({
    selector: 'home',
    template: require('./home.html'),
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
