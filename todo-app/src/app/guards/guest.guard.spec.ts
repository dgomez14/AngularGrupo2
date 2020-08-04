import { TestBed, async, inject } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { GuestGuard } from './guest.guard';

describe('GuestGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GuestGuard,
        provideMockStore()
      ]
    });
  });

  it('should ...', inject([GuestGuard], (guard: GuestGuard) => {
    expect(guard).toBeTruthy();
  }));
});
