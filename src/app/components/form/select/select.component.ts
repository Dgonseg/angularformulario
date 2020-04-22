import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'form-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() selectOptions: String[];
  @Input() selectBrandLabel: String[];
  @Input() selectShipsLabel: String[];
  @Input() selectShipsbyBrandOptions: String[];
  @Input() selectBrandOptions: String[];

  @Input() insertMode: boolean;

  // @Input() selectBrad: any
   @Output() changeBrand: EventEmitter<any> = new EventEmitter();


  brand: any;
  newModel: any;

  ngOnInit() {
    this.brand = {
      name: '',
      ships: []
    }
    this.newModel = {
      brand:  {
        id: null,
        name: null
      },
      model: null
    }
  }


  returnValues() {
    let value =  this.brand
    this.resetValues();
    return value
  }

    returnValuesNewModel() {
    let value =  this.newModel
    this.resetValues();
    return value
  }


  resetValues() {
    this.brand = {
      name: '',
      ships: []
    }
  }

  onChange() {
    this.brand.ships= [];
    this.changeBrand.emit(this.brand.name)
  }
}   