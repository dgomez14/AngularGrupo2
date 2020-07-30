import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { ShowTodoComponent } from './show-todo/show-todo.component';
import { TodosListComponent } from './todos-list.component';

const routes: Routes = [
  {
    path: '',
    component: TodosListComponent
  },
  {
    path: 'edit/:id',
    component: EditTodoComponent
  },
  {
    path: 'show/:id',
    component: ShowTodoComponent
  },
  {
    path: 'new',
    component: NewTodoComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TodosRoutingModule {
}
