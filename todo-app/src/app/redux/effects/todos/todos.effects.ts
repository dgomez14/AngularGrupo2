import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  editTodo,
  editTodoFailure,
  editTodoSuccess,
  getTodos,
  getTodosFailure,
  getTodosSuccess
} from 'src/app/redux/actions/todos.actions';
import { TodoService } from 'src/app/services/todo/todo.service';

@Injectable()
export class TodosEffects {

  getTodos$ = createEffect(() => this.actions$.pipe(
    ofType(getTodos),
    mergeMap(() => this.todoService
      .getTodos()
      .pipe(
        map(todos => getTodosSuccess({ todos })),
        catchError(error => of(getTodosFailure({ error })))
      ))
  ));

  editTodo$ = createEffect(() => this.actions$.pipe(
    ofType(editTodo),
    mergeMap(action => this.todoService
      .editTodo(action.todo)
      .pipe(
        map(todo => editTodoSuccess({ todo })),
        catchError(error => of(editTodoFailure({ error })))
      )
    )
  ));

  constructor(
    private readonly actions$: Actions,
    public readonly todoService: TodoService
  ) {
  }

}
