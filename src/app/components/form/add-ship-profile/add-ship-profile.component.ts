import { Component, OnInit,ViewChild, Output, EventEmitter, Input } from '@angular/core';
import {SelectComponent} from '../select/select.component';
import {DataService} from '../../../shared/services/data.services';

@Component({
  selector: 'app-add-ship-profile',
  templateUrl: './add-ship-profile.component.html',
  styleUrls: ['./add-ship-profile.component.css']
})
export class AddShipProfileComponent implements OnInit {

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
    this.changeBrand.emit(this.brand.name);
  }

}