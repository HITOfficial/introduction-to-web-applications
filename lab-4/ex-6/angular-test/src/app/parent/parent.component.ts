import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  value: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementValue(value: number) {
    if (this.value < 10) {
      this.value += value;
    }
  }

  resetEvent(bool: boolean) {
    if (bool && this.value === 10) {
      // reseting value
      this.value = 0;
    }
  }

}
