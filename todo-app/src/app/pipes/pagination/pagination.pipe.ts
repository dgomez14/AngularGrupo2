import { Pipe, PipeTransform } from '@angular/core';
import { chunk } from 'lodash';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform<T extends Array<any>>(todos: T, page: number = 0, itemsPerPage: number = 10): T | T[][] | never {

    if ( page === -1 ) {
      return chunk(todos, itemsPerPage);
    }

    if ( page >= 0 && page <= todos.length / itemsPerPage ) {
      return chunk(todos, itemsPerPage)[page];
    }

    throw new Error('Página inválida: ' + page);
  }

}
