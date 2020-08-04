import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck, ElementRef,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Todo } from 'src/app/models/todo';
import { getTodos, getTodosFailure } from 'src/app/redux/actions/todos.actions';
import { State } from 'src/app/redux/reducers';
import { isLastAction, selectTodosList } from 'src/app/redux/reducers/todos/todos.reducer';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: [ './todos-list.component.scss' ]
})
export class TodosListComponent
  implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @ViewChild('searchInput', { static: true })
  searchInput: ElementRef;

  todos: Todo[];
  itemsPerPage = 10;
  page = 1;
  search: string;

  constructor(
    private readonly router: Router,
    public readonly store: Store<State>
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.searchInput);

    this.store
      .pipe(
        select(selectTodosList)
      )
      .subscribe((todos: Todo[]) => {
        if ( todos ) {
          this.todos = todos;
        } else {
          this.store.dispatch(getTodos());
        }
      });

    this.store
      .pipe(
        select(isLastAction, getTodosFailure),
        filter(message => !!message)
      )
      .subscribe(isAction => {
        alert('No se pudo obtener los todos');
      });
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log('SEARCH INPUT', this.searchInput);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
    console.log('SEARCH INPUT', this.searchInput);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  edit(id: number): void {
    this.router.navigateByUrl('/todos/edit/' + id).then().catch();
  }

  to(page: number): void {
    if ( page < 1 || page > this.todos.length ) {
      return;
    }

    this.page = page;
  }
}
