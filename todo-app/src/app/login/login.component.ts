import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from 'src/app/redux/actions/auth.actions';
import { State } from '../redux/reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent {

  constructor(
    private readonly store: Store<State>,
    private readonly router: Router
  ) {
  }

  login(): void {
    this.store.dispatch(login());
    this.router.navigateByUrl('todos').then();
  }

}
