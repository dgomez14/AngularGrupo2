import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { State } from '../redux/reducers';
import { authFeatureKey } from '../redux/reducers/auth/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {

  constructor(
    private readonly store: Store<State>
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store
      .select(store => store[authFeatureKey])
      .pipe(map(store => !store.loggedUser), first());
  }
}
