import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromTodos from './todos/todos.reducer';

export interface State {
  [fromTodos.todosFeatureKey]: fromTodos.TodosState;
}

export const reducers: ActionReducerMap<State> = {
  [fromTodos.todosFeatureKey]: fromTodos.reducer
};

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state: any, action: Action): ActionReducer<any> => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}


export const metaReducers: MetaReducer<State>[] = !environment.production ? [ debug ] : [];
