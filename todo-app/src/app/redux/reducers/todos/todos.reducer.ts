import { HttpErrorResponse } from '@angular/common/http';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Todo } from 'src/app/models/todo';
import {
  editTodoFailure,
  editTodoSuccess,
  getTodosFailure,
  getTodosSuccess
} from 'src/app/redux/actions/todos.actions';
import { State } from '../index';

export const todosFeatureKey = 'todosState';

export interface TodosState {
  todos: Todo[] | undefined;
  error: HttpErrorResponse | null;
  action: string;
}

export const initialTodosState: TodosState = {
  todos: undefined,
  error: null,
  action: null
};

export const reducer = createReducer(
  initialTodosState,
  on(getTodosSuccess, (state: TodosState, action): TodosState => {
    return {
      ...state,
      todos: action.todos,
      action: action.type,
      error: null
    };
  }),
  on(getTodosFailure, (state: TodosState, action) => {
    return {
      ...state,
      error: action.error,
      action: action.type
    };
  }),
  on(editTodoSuccess, (state: TodosState, action) => {
    const foundTodo = state.todos.find(todo => todo.id === action.todo.id);
    const index = state.todos.indexOf(foundTodo);
    const todos = [
      ...state.todos.slice(0, index),
      action.todo,
      ...state.todos.slice(index + 1)
    ];

    return {
      ...state,
      todos,
      action: action.type,
      error: null
    };
  }),
  on(editTodoFailure, (state: TodosState, action) => {
    return {
      ...state,
      error: action.error,
      action: action.type
    };
  })
);


export const selectTodosState = createFeatureSelector<State, TodosState>('todosState');

export const selectTodosList = createSelector(
  selectTodosState,
  (state: TodosState): Todo[] | undefined => state.todos
);

export const selectTodosMessageError = createSelector(
  selectTodosState,
  (state: TodosState): HttpErrorResponse => state.error
);

export const selectTodo = createSelector(
  selectTodosList,
  (todos: Todo[] | undefined, { id }: { id: number }): Todo | undefined => {
    if ( todos ) {
      return todos.find(todo => todo.id === id);
    }

    return undefined;
  }
);

export const selectLastAction = createSelector(
  selectTodosState,
  (state: TodosState) => state.action
);

export const isLastAction = createSelector(
  selectLastAction,
  (action, { type }) => action === type
);
