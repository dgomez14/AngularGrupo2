import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Todo } from '../../models/todo';
import { FilterPipe } from '../../pipes/filter/filter.pipe';
import { PaginationPipe } from '../../pipes/pagination/pagination.pipe';
import { getTodos } from '../../redux/actions/todos.actions';
import { State } from '../../redux/reducers';
import { initialTodosState, todosFeatureKey } from '../../redux/reducers/todos/todos.reducer';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';

import { TodosListComponent } from './todos-list.component';

describe('TodosListComponent', () => {
  let component: TodosListComponent;
  let fixture: ComponentFixture<TodosListComponent>;
  let store: MockStore<Pick<State, 'todosState'>>;

  const initialState: Pick<State, 'todosState'> = {
    [todosFeatureKey]: initialTodosState
  };

  const routes: Routes = [
    {
      path: 'todos',
      component: TodosListComponent
    },
    {
      path: 'todos/edit/:id',
      component: EditTodoComponent
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodosListComponent,
        EditTodoComponent,
        SingleTodoComponent,
        PaginationPipe,
        FilterPipe
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes),
      ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.get(Store);
  });

  // describe('Creation', () => {
  //   it('should create', () => {
  //     expect(component).toBeTruthy();
  //   });
  //
  //   it('should call getTodos method', () => {
  //     spyOn(component.todosService, 'getTodos').and.returnValue(of([]));
  //     component.ngOnInit();
  //     expect(component.todosService.getTodos).toHaveBeenCalledTimes(1);
  //   });
  //
  //   it('should set the response value to todos attribute', () => {
  //     const todos: Todo[] = [ {
  //       id: 1,
  //       title: '',
  //       completed: true,
  //       userId: 1
  //     } ];
  //     spyOn(component.todosService, 'getTodos').and.returnValue(of(todos));
  //
  //     component.ngOnInit();
  //
  //     expect(component.todos).toEqual(todos);
  //   });
  //
  //   it('should show an alert', () => {
  //     spyOn(component.todosService, 'getTodos').and.returnValue(new Observable(subscriber => {
  //       subscriber.error('No se pudo obtener los todos');
  //     }));
  //     spyOn(window, 'alert');
  //     component.ngOnInit();
  //     expect(window.alert).toHaveBeenCalled();
  //   });
  //
  //   it(`should show 'No se pudo obtener los todos' when the request fails`, () => {
  //     const errorMessage = new Error('No se pudo obtener los todos');
  //     spyOn(component.todosService, 'getTodos').and.returnValue(new Observable(subscriber => {
  //       subscriber.error(errorMessage);
  //     }));
  //     spyOn(window, 'alert');
  //     component.ngOnInit();
  //     expect(window.alert).toHaveBeenCalledWith(errorMessage);
  //   });
  // });

  describe('Creation', () => {
    it('should dispatch a getTodos action', () => {
      spyOn(component.store, 'dispatch');

      component.ngOnInit();

      expect(component.store.dispatch).toHaveBeenCalledWith(getTodos());
    });

    it('should set todos to the value in the store', () => {
      component.ngOnInit();

      store.setState({
        [todosFeatureKey]: {
          todos: [],
          action: null,
          error: null
        }
      });

      expect(component.todos).toEqual([]);
    });
  });

  describe('edit', () => {
    let router: Router;

    beforeEach(() => {
      fixture = TestBed.createComponent(TodosListComponent);
      router = TestBed.get(Router);
    });

    it('should redirect to /todos/edit/:id', fakeAsync(() => {
      const id = 1;
      router.navigateByUrl('todos');
      tick();

      component.edit(id);
      tick();

      expect(router.isActive('/todos/edit/' + id, true)).toBeTruthy();
    }));
  });

  describe('to', () => {

    const todos: Todo[] = [ {
      id: 1,
      title: '',
      completed: true,
      userId: 1
    } ];

    it('should ', () => {
      component.todos = todos;

      component.page = 10;
      component.to(1);

      expect(component.page).toBe(1);
    });

    it('should not set page to 0', () => {
      component.todos = todos;

      component.to(0);

      expect(component.page).not.toBe(0);
    });
  });

  describe('html', () => {
    let html: HTMLElement;

    beforeEach(() => {
      html = fixture.debugElement.nativeElement;
    });

    it('should not render .container when todos attribute is undefined', () => {
      component.todos = undefined;
      fixture.detectChanges();

      const container = html.querySelector('.container');

      expect(container).toBeFalsy();
    });

    it('should render .container when todos attribute is defined', () => {
      component.todos = [];
      fixture.detectChanges();

      const container = html.querySelector('.container');

      expect(container).toBeDefined();
    });
  });
});
