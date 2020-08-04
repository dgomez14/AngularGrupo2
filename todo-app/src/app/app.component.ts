import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/redux/actions/auth.actions';
import { State } from './redux/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
  // interpolation: [ '@', '@' ]
})
export class AppComponent {
  constructor(
    private readonly store: Store<State>,
    private readonly router: Router
  ) {
  }

  logout(): void {
    this.store.dispatch(logout());
    this.router.navigateByUrl('login').then();
  }
}
