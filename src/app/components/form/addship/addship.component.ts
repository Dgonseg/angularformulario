import { Component, OnInit,ViewChild, Output, EventEmitter } from '@angular/core';
import {SelectComponent} from '../select/select.component';

@Component({
  selector: 'app-addship',
  templateUrl: './addship.component.html',
  styleUrls: ['./addship.component.css']
})
export class AddshipComponent implements OnInit {
  @ViewChild(SelectComponent) selectComponent: SelectComponent;
  @Output() populateTable: EventEmitter<any> = new EventEmitter();

  // /new
  selectShipsbyBrandOptions: String[];
  selectBrandOptions: String[];
  selectBrandLabel: String;
  selectShipsLabel: String;

  constructor() { }

  ngOnInit() {
    this.selectBrandOptions = ['Banu', 'anvil'];
    this.selectShipsbyBrandOptions = ['merchahn', 'Defender'];
    this.selectBrandLabel="brand"
    this.selectShipsLabel="ships"
  }

  save() {
    let shipValue =  this.selectComponent.returnValues();
    console.log('shipValue', shipValue);
    this.populateTable.emit(shipValue);

  }

}