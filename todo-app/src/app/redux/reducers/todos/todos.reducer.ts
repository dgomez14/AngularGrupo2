import { createReducer, on } from '@ngrx/store';
import { Todo } from '../../../models/todo';
import { getTodosFailure, getTodosSuccess } from '../../actions/todos.actions';

export const todosFeatureKey = 'todosState';

export interface TodosState {
  todos: Todo[] | undefined;
  message: string | null;
}

export const initialTodosState: TodosState = {
  todos: undefined,
  message: null
};

export const reducer = createReducer(
  initialTodosState,
  on(getTodosSuccess, (state: TodosState, action): TodosState => {
    return {
      ...state,
      todos: action.todos
    };
  }),
  on(getTodosFailure, (state: TodosState, action) => {
    return {
      ...state,
      message: action.message
    };
  })
);


