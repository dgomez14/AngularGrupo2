import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo/todo.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: [ './todos-list.component.scss' ]
})
export class TodosListComponent {

  todos: Todo[];
  itemsPerPage = 10;
  page = 1;
  search: string;

  constructor(
    private readonly todosService: TodoService,
    private readonly router: Router
  ) {
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

  edit(id: number): void {
    this.router.navigateByUrl('/todos/edit/' + id).then().catch();
  }

  to(page: number): void {
    if ( page < 1 || page > this.todos.length ) {
      return;
    }

    this.page = page;
  }
}
