import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private readonly http: HttpClient
  ) {
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${ environment.apiUrl }/todos`);
  }

  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${ environment.apiUrl }/todos/${ id }`);
  }

  editTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${ environment.apiUrl }/todos/${ todo.id }`, todo);
  }

}
