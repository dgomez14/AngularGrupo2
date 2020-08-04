import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Todo } from '../../models/todo';
import { getTodos } from '../../redux/actions/todos.actions';
import { State } from '../../redux/reducers';
import {
  selectTodosList,
  selectTodosMessageError,
  todosFeatureKey,
  TodosState
} from '../../redux/reducers/todos/todos.reducer';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: [ './todos-list.component.scss' ]
})
export class TodosListComponent implements OnInit {

  todos: Todo[];
  itemsPerPage = 10;
  page = 1;
  search: string;

  constructor(
    private readonly router: Router,
    public readonly store: Store<State>
  ) {
  }

  ngOnInit(): void {
    this.store
      .pipe(
        select(selectTodosList)
      )
      .subscribe((todos: Todo[]) => {
        console.log(todos);

        if ( todos ) {
          this.todos = todos;
        } else {
          this.store.dispatch(getTodos());
        }
      });

    this.store
      .pipe(
        select(selectTodosMessageError),
        filter(message => !!message)
      )
      .subscribe((message: HttpErrorResponse) => alert(message.message));
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
