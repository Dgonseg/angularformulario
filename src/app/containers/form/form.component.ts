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


  constructor() { }

  ngOnInit() {
    this.selectShipsbyBrandOptions = ['Banu', 'anvil'];
    this.selectBrandOptions = ['merchahn', 'Defender'];


    //rellena el select de Banu soil
    // this.rellenarSelectBanu();

    // this.rellenarSelectAnvil();


    // this.selectOptions1 = ['op4', 'op4', 'mustang'];
    // this.selectOptions2 = ['op5', 'op5op2', 'op3'];
    // this.selectOptions3 = ['op1', 'op2', 'op3'];
  }

  // rellenarSelectBanu() {
  //   this.selectLabelBanu = "Banu";
  //   this.selectOptions = ['merchahn', 'Defender'];
  // }

  // rellenarSelectAnvil() {
  //   // this.
  // }

  // save() {
  //   console.log('this', this);
    
  // }
}