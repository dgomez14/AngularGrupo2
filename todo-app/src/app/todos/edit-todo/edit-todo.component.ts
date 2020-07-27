import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, tap } from 'rxjs/operators';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: [ './edit-todo.component.scss' ]
})
export class EditTodoComponent {

  todo: Todo;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly todoService: TodoService
  ) {
    this.route.paramMap
      .pipe(
        map(params => params.get('id')),
        mergeMap(id => this.todoService.getTodo(+id)),
        tap(todo => this.todo = todo)
      )
      .subscribe(todo => {
        console.log('Todo', todo);
        this.todo = todo;
      });
  }

}
