import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../environments/environment';
import { Todo } from '../../models/todo';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.get(TodoService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getTodos', () => {
    it('should send a get request to /todos', () => {
      service.getTodos().subscribe(res => expect(res).toBeTruthy());

      const httpRequest = httpMock.expectOne(`${ environment.apiUrl }/todos`);

      expect(httpRequest.request.method).toBe('GET');
    });

    // it('should have query params', () => {
    //   service.getTodos().subscribe(res => expect(res).toBeTruthy());
    //
    //   const httpRequest = httpMock.match(req => req.url.includes(`${ environment.apiUrl }/todos`));
    //   httpMock.expectNone(`${ environment.apiUrl }/todos`);
    //
    //   expect(httpRequest[0].request.params.get('userId')).toBe('1');
    // });
  });

  describe('getTodo', () => {
    it('should send a get request to /todos/{id}', () => {
      const id = 1;
      service.getTodo(id).subscribe(res => expect(res).toBeTruthy());

      const httpRequest = httpMock.expectOne(`${ environment.apiUrl }/todos/${ id }`);

      expect(httpRequest.request.method).toBe('GET');
    });
  });

  describe('editTodo', () => {
    it('should send a get request to /todos/{id}', () => {
      const todo: Todo = {
        id: 1,
        title: 'Todo',
        completed: true,
        userId: 1
      };
      service.editTodo(todo).subscribe(res => expect(res).toBeTruthy());

      const httpRequest = httpMock.expectOne(`${ environment.apiUrl }/todos/${ todo.id }`);

      expect(httpRequest.request.method).toBe('PUT');
      expect(httpRequest.request.body).toBe(todo);
    });
  });
});
