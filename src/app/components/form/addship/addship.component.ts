import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addship',
  templateUrl: './addship.component.html',
  styleUrls: ['./addship.component.css']
})
export class AddshipComponent implements OnInit {
  // /new
  selectShipsbyBrandOptions: String[];
  selectBrandOptions: String[];
  selectBrandLabel: String;
  selectShipsLabel: String;

  constructor() { }

  ngOnInit() {
    this.selectShipsbyBrandOptions = ['Banu', 'anvil'];
    this.selectBrandOptions = ['merchahn', 'Defender'];
    this.selectBrandLabel="brand"
    this.selectShipsLabel="ships"


    //rellena el select de Banu soil
    // this.rellenarSelectBanu();

    // this.rellenarSelectAnvil();


    // this.selectOptions1 = ['op4', 'op4', 'mustang'];
    // this.selectOptions2 = ['op5', 'op5op2', 'op3'];
    // this.selectOptions3 = ['op1', 'op2', 'op3'];
  }

}