import { Component, OnInit, Input } from '@angular/core';
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


  brand: any;

  ngOnInit() {
    this.brand = {
      name: '',
      ships: []
    }
  }


  returnValues() {
    let value =  this.brand
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
  }
}   