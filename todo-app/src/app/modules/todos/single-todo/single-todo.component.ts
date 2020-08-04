import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: [ './single-todo.component.scss' ]
})
export class SingleTodoComponent implements OnInit, OnChanges {

  @Input()
  index: number;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('SingleTodoComponent', changes);
  }

  ngOnInit() {
  }

}
