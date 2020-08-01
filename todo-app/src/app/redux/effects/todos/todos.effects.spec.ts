import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TodosEffects } from './todos.effects';

describe('AppEffects', () => {
  let actions$: Observable<any>;
  let effects: TodosEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
});
