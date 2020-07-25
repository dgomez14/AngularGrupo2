import { Component } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Todo } from './models/todo';
import { TodoService } from './services/todo/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
  // interpolation: [ '@', '@' ]
})
export class AppComponent {
  title = '';

  todos: Todo[];

  constructor(private readonly todosService: TodoService) {
    this.todosService.getTodos()
      .pipe(
        catchError(() => {
          return of(new Error('No se pudo obtener los todos'));
        })
      )
      .subscribe((todos) => {
        if ( Array.isArray(todos) ) {
          this.todos = todos;
        } else {
          alert(todos);
        }
      });
  }

  changeMessage(): void {
    this.title = 'Hola Mundo';
  }
}
