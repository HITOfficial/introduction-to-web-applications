import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() incrementEmit = new EventEmitter<number>();
  @Output() resetEmit = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  incrementEvent() {
    this.incrementEmit.emit(1);
  }

  resetEvent() {
    this.resetEmit.emit(true)
  }

}
