import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { State } from '../../../redux/reducers';
import { initialTodosState, todosFeatureKey } from '../../../redux/reducers/todos/todos.reducer';

import { EditTodoComponent } from './edit-todo.component';

describe('EditTodoComponent', () => {
  let component: EditTodoComponent;
  let fixture: ComponentFixture<EditTodoComponent>;

  const initialState: State = {
    [todosFeatureKey]: initialTodosState
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTodoComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
