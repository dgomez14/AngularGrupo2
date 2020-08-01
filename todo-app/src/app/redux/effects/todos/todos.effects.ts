import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TodoService } from '../../../services/todo/todo.service';
import { getTodos, getTodosFailure, getTodosSuccess } from '../../actions/todos.actions';

@Injectable()
export class TodosEffects {

  getTodos$ = createEffect(() => this.actions$.pipe(
    ofType(getTodos),
    mergeMap(() => {
      return this.todoService.getTodos().pipe(
        map(todos => getTodosSuccess({ todos })),
        catchError(message => of(getTodosFailure({ message })))
      );
    })
  ));

  constructor(
    private readonly actions$: Actions,
    private readonly todoService: TodoService
  ) {
  }

}
