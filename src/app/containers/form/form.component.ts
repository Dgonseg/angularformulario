import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  selectOptions: String[];
  selectOptions1: String[];
  selectOptions2: String[];
  selectOptions3: String[];
  selectLabelBanu: String;
  // /new
  selectShipsbyBrandOptions: String[];
  selectBrandOptions: String[];
  dataTable: any;
  datatableColumns:String[]


  constructor() { }

  ngOnInit() {
    this.selectShipsbyBrandOptions = ['Banu', 'anvil'];
    this.selectBrandOptions = ['merchahn', 'Defender'];
    this.dataTable = [];
  }

  populateTable($event) {
    this.dataTable.push($event);
    this.datatableColumns= ['name','ships'];
  }
}