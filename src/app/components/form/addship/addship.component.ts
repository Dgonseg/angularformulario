import { Component, OnInit,ViewChild, Output, EventEmitter, Input } from '@angular/core';
import {SelectComponent} from '../select/select.component';
import {DataService} from '../../../shared/services/data.services';

@Component({
  selector: 'app-addship',
  templateUrl: './addship.component.html',
  styleUrls: ['./addship.component.css']
})
export class AddshipComponent implements OnInit {
  @ViewChild(SelectComponent) selectComponent: SelectComponent;
  @Output() populateTable: EventEmitter<any> = new EventEmitter();
  @Output() selectBrad: EventEmitter<any> = new EventEmitter();
  @Input() adminMode : boolean;
  @Input() brands: any[]

  @Input() brandModels : boolean;

  // /new
  selectShipsbyBrandOptions: any;
  selectBrandOptions: String[];
  selectBrandLabel: String;
  selectShipsLabel: String;


  constructor(private db: DataService) { }

  ngOnInit() {
    this.selectBrandOptions = ['Banu', 'anvil'];
    this.selectShipsbyBrandOptions = this.brandModels;
    this.selectBrandLabel="Marca"
    this.selectShipsLabel="Modelo"
  }

  save() {
    let shipValue =  this.selectComponent.returnValues();
    this.populateTable.emit(shipValue);
  }

  saveModel() {
    let shipValue =  this.selectComponent.returnValuesNewModel();
    console.log('ship', shipValue)
    this.db.createModel(shipValue);
  }

  changeBrand($event) {
    this.selectBrad.emit($event)
  }
}