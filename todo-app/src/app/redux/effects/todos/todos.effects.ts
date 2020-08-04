import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TodoService } from '../../../services/todo/todo.service';
import {
  editTodo,
  editTodoFailure,
  editTodoSuccess,
  getTodos,
  getTodosFailure,
  getTodosSuccess
} from '../../actions/todos.actions';

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

  editTodo$ = createEffect(() => this.actions$.pipe(
    ofType(editTodo),
    mergeMap(action => this.todoService
      .editTodo(action.todo)
      .pipe(
        map(todo => editTodoSuccess({ todo })),
        catchError(err => of(editTodoFailure({ message: err })))
      )
    )
  ));

  constructor(
    private readonly actions$: Actions,
    private readonly todoService: TodoService
  ) {
  }

}
