import { createReducer, on } from '@ngrx/store';
import { login, logout } from '../../actions/auth.actions';

export const authFeatureKey = 'authState';

export interface AuthState {
  loggedUser: boolean;
}

export const initialAuthState: AuthState = {
  loggedUser: false
};

export const reducer = createReducer(
  initialAuthState,
  on(login, (state: AuthState, action) => {
    return {
      loggedUser: true
    };
  }),
  on(logout, (state: AuthState, action) => {
    return {
      loggedUser: false
    };
  })
);
