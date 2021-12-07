import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  models: any = {
    bmw: ["x1", "x2", "x3", "x6", "x10"],
    audi: ["a1", "a2", "a4", "a5", "rs6"],
    mercedes: ["cl", "clk"],
    fiat: ["tipo", "panda"],
    porsche: ["boxster", "carrera"]
  }

  colors: any = {
    x1: ["", "red", "yellow", "green", "blue", "black"],
    x2: ["", "red", "orange", "white"],
    x3: ["", "red", "blue", "white"],
    x6: ["", "blue", "white"],
    x10: ["", "red", "blue", "white"],
    a1: ["", "red", "blue", "white"],
    a2: ["", "red", "blue", "white"],
    a4: ["", "red", "blue", "white"],
    a5: ["", "blue", "white"],
    rs6: ["", "white"],
    cl: ["", "grey"],
    clk: ["", "green", "white"],
    tipo: ["", "green", "black"],
    panda: ["", "white", "red"],
    boxster: ["", "orange", "white"],
    carrera: ["", "white", "yellow"]
  }

  brandSelected: boolean = false;
  modelSelected: boolean = false;
  colorSelected: boolean = false;
  brand: string = '';
  model: string = '';
  color: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  selectedBrand() {
    let brand = document.querySelector('#brand')! as HTMLInputElement;
    // selected brand
    if (brand.value) {
      if (brand.value != this.brand) {
        this.modelSelected = false;
        this.model = '';
        this.colorSelected = false;
        this.color = '';
      }
      this.brandSelected = true;
      this.brand = brand.value;
    }
    else {
      this.brandSelected = false;
      this.brand = '';
      this.modelSelected = false;
      this.model = '';
      this.colorSelected = false;
      this.color = '';
    }
  }

  selectedModel() {
    let model = document.querySelector('#model')! as HTMLInputElement;
    if (model.value) {
      this.colorSelected = false;
      this.color = '';
      this.modelSelected = true;
      this.model = model.value;
    }
    else {
      this.modelSelected = false;
      this.model = '';
      this.colorSelected = false;
      this.color = '';
    }
    // removing color from previous
    let color = document.querySelector('#color') as HTMLInputElement
    if (color != null) {
      color.style.backgroundColor = 'white'
      color.value = ''
    }
  }

  selectedColor() {
    let color = document.querySelector('#color')! as HTMLInputElement;
    if (color.value) {
      this.colorSelected = true;
      this.color = color.value;
      color.style.backgroundColor = this.color;
    }
    else {
      color.style.backgroundColor = 'white';
      this.colorSelected = false;
      this.color = '';
    }
  }

  allOptionsSelected() {
    if (this.brandSelected && this.modelSelected && this.colorSelected) {
      return this.brand + ' ' + this.model + ' ' + this.color;
    }
    else {
      return 'chose all options to see result';
    }
  }


}
