import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap, tap } from 'rxjs/operators';
import { Todo } from '../../../models/todo';
import { TodoService } from '../../../services/todo/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: [ './edit-todo.component.scss' ]
})
export class EditTodoComponent {

  todo: Todo;
  editForm: FormGroup;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly todoService: TodoService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {
    this.route.paramMap
      .pipe(
        map(params => params.get('id')),
        mergeMap(id => this.todoService.getTodo(+id)),
        tap(todo => this.todo = todo)
      )
      .subscribe(todo => {
        console.log('Todo', todo);
        this.todo = todo;
        this.createEditForm();
      });
  }

  createEditForm(): void {
    this.editForm = this.formBuilder.group({
      title: new FormControl(this.todo.title, [ Validators.required, Validators.maxLength(10) ]),
      completed: [ this.todo.completed ]
    });
  }

  edit(): void {
    if ( this.editForm.invalid ) {
      return;
    }

    const editTodo: Todo = {
      ...this.todo,
      ...this.editForm.value
    };

    this.todoService.editTodo(editTodo).subscribe(todo => {
      this.router.navigateByUrl('todos').then();
    });
  }

}
