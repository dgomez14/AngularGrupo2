import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Todo } from '../../models/todo';
import { getTodos } from '../../redux/actions/todos.actions';
import { State } from '../../redux/reducers';
import { todosFeatureKey, TodosState } from '../../redux/reducers/todos/todos.reducer';

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
    private readonly store: Store<State>
  ) {
  }

  ngOnInit(): void {
    this.store
      .select(state => state[todosFeatureKey])
      .subscribe((todosState: TodosState) => {
        console.log(todosState);

        if ( todosState.todos ) {
          this.todos = todosState.todos;
        } else {
          this.store.dispatch(getTodos());
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
