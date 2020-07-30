import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../../models/todo';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], search: string = ''): Todo[] {
    return todos.filter(todo => todo.title.includes(search));
  }

}
