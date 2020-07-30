import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter/filter.pipe';
import { PaginationPipe } from '../../pipes/pagination/pagination.pipe';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { ShowTodoComponent } from './show-todo/show-todo.component';
import { TodosListComponent } from './todos-list.component';

import { TodosRoutingModule } from './todos-routing.module';


@NgModule({
  declarations: [
    TodosListComponent,
    EditTodoComponent,
    ShowTodoComponent,
    NewTodoComponent,
    PaginationPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TodosModule {
}
