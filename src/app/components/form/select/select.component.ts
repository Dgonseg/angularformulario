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
  @Input() selectedBrand: String[];
  

  @Input() insertMode: boolean;

   @Output() changeBrand: EventEmitter<any> = new EventEmitter();


  brand: any;
  newModel: any;

  ngOnInit() {
    console.log('select', this.selectShipsbyBrandOptions );
    console.log('selectedBrand', this.selectedBrand );
    if(!!this.selectedBrand) {
      this.brand = {
        name: this.selectedBrand,
        ships: []
      }


    } else {
      this.brand = {
        name: '',
        ships: []
      }

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
    this.selectShipsbyBrandOptions = [];
  }

  onChange() {
    this.brand.ships= [];
    this.changeBrand.emit(this.brand.name)
  }
}   