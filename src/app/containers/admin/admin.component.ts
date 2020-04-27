import { Component, OnInit } from '@angular/core';
import { DataService } from "../../shared/services/data.services";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  datatableColumns: any;
  dataTable: any;
  dataModelTable: any;
  datatableModelColumns: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUserModels().subscribe((ships)=>{
      console.log('ships', ships);
      this.datatableColumns = ['name', 'ships', 'userName', 'actions'];
      this.dataTable = ships;

    });
    this.dataService.getModels().subscribe((ships)=>{
      console.log('getModels', ships);
      this.datatableModelColumns = ['brand', 'model'];
      this.dataModelTable = ships;
    });


  }

}