import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot } from 'jasmine-marbles';
import { Observable, of, throwError } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { getTodos, getTodosFailure, getTodosSuccess } from 'src/app/redux/actions/todos.actions';

import { TodosEffects } from './todos.effects';

describe('AppEffects', () => {
  let actions$: Observable<any>;
  let effects: TodosEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        TodosEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<TodosEffects>(TodosEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('getTodos$', () => {

    beforeEach(() => {
      actions$ = hot('a', { a: getTodos() });
    });

    it('should call getTodos method', () => {
      spyOn(effects.todoService, 'getTodos').and.returnValue(of(null));

      effects.getTodos$.subscribe(() => {
        expect(effects.todoService.getTodos).toHaveBeenCalled();
      });
    });

    it('should return getTodosSuccess on success', () => {
      const todos: Todo[] = [];
      spyOn(effects.todoService, 'getTodos').and.returnValue(of(todos));

      effects.getTodos$.subscribe((result) => {
        if ( result.type === getTodosSuccess.type ) {
          expect(result.todos).toEqual(todos);
        }
        expect(result).toEqual(getTodosSuccess);
      });

      // Otra opción es usando jasmine marbles
      expect(effects.getTodos$).toBeObservable(hot('a', { a: getTodosSuccess({ todos }) }));
    });

    it('should return getTodosFailure on failure', () => {
      const error: HttpErrorResponse = new HttpErrorResponse({
        error: '404'
      });
      spyOn(effects.todoService, 'getTodos').and.returnValue(throwError(error));

      effects.getTodos$.subscribe(result => {
        if ( result.type === getTodosFailure.type ) {
          expect(result.error).toEqual(error);
        }
        expect(result).toEqual(getTodosFailure);
      });

      // Otra opción es usando jasmine marbles
      expect(effects.getTodos$).toBeObservable(hot('a', { a: getTodosFailure({ error }) }));
    });
  });
});
