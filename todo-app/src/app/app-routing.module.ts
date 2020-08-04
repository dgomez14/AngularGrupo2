import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [ GuestGuard ]
  },
  {
    path: 'todos',
    loadChildren: () => import('./modules/todos/todos.module').then(m => m.TodosModule),
    canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard ]
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
    canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
