import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  stringToExecute: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  clickedNumber(e: string) {
    let lastDigit = this.stringToExecute[this.stringToExecute.length - 1];
    const signs = ['-', '+'];
    // replacing last operation sign
    if (signs.includes(e) && signs.includes(lastDigit)) {
      this.stringToExecute = this.stringToExecute.slice(0, -1) + e;
    }
    else {
      this.stringToExecute += e;
    }
  }

  back() {
    if (this.stringToExecute.length > 0) {
      if (this.stringToExecute == 'NaN') {
        this.stringToExecute = '0';
      }
      else {
        this.stringToExecute = this.stringToExecute.slice(0, -1);
      }
    }
  }

  reset() {
    this.stringToExecute = '';
  }

  result() {
    let numbersOperations: string[] = [];
    let tmpNumber: string = '0';
    for (let e of this.stringToExecute) {
      if (e != '-' && e != '+' && e != '/' && e != '*') {
        tmpNumber += e;
      }
      else {
        numbersOperations.push(tmpNumber);
        numbersOperations.push(e);
        tmpNumber = '0'
      }
    }
    numbersOperations.push(tmpNumber);
    // last number adding to array
    let resultNumber = numbersOperations[0];

    for (let i = 1; i < numbersOperations.length - 1; i++) {
      if (numbersOperations[i] === '+') {
        resultNumber = String(Number(resultNumber) + Number(numbersOperations[i + 1]));
      }
      else {
        resultNumber = String(Number(resultNumber) - Number(numbersOperations[i + 1]));
      }
    }
    this.stringToExecute = resultNumber;
  }
}
