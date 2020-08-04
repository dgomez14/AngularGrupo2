import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first, map, take } from 'rxjs/operators';
import { State } from '../redux/reducers';
import { authFeatureKey } from '../redux/reducers/auth/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(
    private readonly store: Store<State>
  ) {
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    return this.isLogged();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isLogged();
  }

  isLogged(): Observable<boolean> {
    return this.store
      .select(store => store[authFeatureKey])
      .pipe(
        map(store => store.loggedUser),
        first()
      );
  }

}
