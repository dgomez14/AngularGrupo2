import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/models/todo';

// Acciones para editar un Todo
export const editTodo = createAction(
  '[Todos] Edit Todo',
  props<{ todo: Todo }>()
);

export const editTodoSuccess = createAction(
  '[Todos] Edit Todo Success',
  props<{ todo: Todo }>()
);

export const editTodoFailure = createAction(
  '[Todos] Edit Todo Failure',
  props<{ error: HttpErrorResponse }>()
);


// Acciones para obtener todos los Todos
export const getTodos = createAction(
  '[Todos] Get Todos'
);

export const getTodosSuccess = createAction(
  '[Todos] Get Todos Success',
  props<{ todos: Todo[] }>()
);

export const getTodosFailure = createAction(
  '[Todos] Get Todos Failure',
  props<{ error: HttpErrorResponse }>()
);
