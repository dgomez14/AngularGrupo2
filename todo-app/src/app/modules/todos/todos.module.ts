import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/pipes/filter/filter.pipe';
import { PaginationPipe } from 'src/app/pipes/pagination/pagination.pipe';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { ShowTodoComponent } from './show-todo/show-todo.component';
import { TodosListComponent } from './todos-list.component';

import { TodosRoutingModule } from './todos-routing.module';
import { SingleTodoComponent } from './single-todo/single-todo.component';


@NgModule({
  declarations: [
    TodosListComponent,
    EditTodoComponent,
    ShowTodoComponent,
    NewTodoComponent,
    PaginationPipe,
    FilterPipe,
    SingleTodoComponent
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
