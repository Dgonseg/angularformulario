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
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getShips()
    .subscribe((ships)=>{
      this.datatableColumns = ['name', 'ships', 'userName'];
      this.dataTable = ships;

    });

  }

}