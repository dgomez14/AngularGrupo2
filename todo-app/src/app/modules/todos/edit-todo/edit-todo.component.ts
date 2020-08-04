import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, mergeMap } from 'rxjs/operators';
import { Todo } from '../../../models/todo';
import { editTodo, editTodoSuccess, getTodos } from '../../../redux/actions/todos.actions';
import { State } from '../../../redux/reducers';
import { selectTodo, todosFeatureKey } from '../../../redux/reducers/todos/todos.reducer';
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
    private readonly router: Router,
    private readonly store: Store<State>
  ) {
    this.route.paramMap
      .pipe(
        map(params => +params.get('id')),
        mergeMap(id => this.store.pipe(select(selectTodo, { id })))
      )
      .subscribe((todo: Todo | undefined) => {
        if ( todo ) {
          this.todo = todo;
          this.createEditForm();
        } else {
          this.store.dispatch(getTodos());
          alert('Error');
        }
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

    const updatedTodo: Todo = {
      ...this.todo,
      ...this.editForm.value
    };

    this.store.dispatch(editTodo({ todo: updatedTodo }));
    this.store.select(state => state[todosFeatureKey]).subscribe(store => {
      if ( store.action === editTodoSuccess.type ) {
        this.router.navigateByUrl('/todos').then();
      }
    });
  }

}
