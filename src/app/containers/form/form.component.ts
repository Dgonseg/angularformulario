import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {TableComponent} from "../../components/table/table.component";
import {DataService} from '../../shared/services/data.services';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild(TableComponent) tableComponent: TableComponent;
  @Input() adminMode : boolean;

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
  brands =[];


  constructor(private db: DataService) { }

  ngOnInit() {
    this.db.getBrand().subscribe(
      (brands)=>{
          var test = [];
          brands.forEach((brand: any) => {
           this.brands.push({
            id: brand.payload.doc.id,
            data: brand.payload.doc.data()
          });
        })
      },
      (ko)=>{console.log('ko',  ko)}
    );
    this.selectShipsbyBrandOptions = ['Banu', 'anvil'];
    this.selectBrandOptions = [];
    this.dataTable = [];
  }

  populateTable($event) {
    this.dataTable.push($event);
    this.datatableColumns= ['name','ships'];
    this.tableComponent.refresh();
  }

  selectBrad($event) {
    console.log('thuis!!!!')
    this.getmodel($event);
  }

  getmodel(brand) {

  }
}