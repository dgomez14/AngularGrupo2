import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

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
});
