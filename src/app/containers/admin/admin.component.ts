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
    console.log('onINit');
    this.dataService.getUserModels().subscribe((ships)=>{
      console.log('ships', ships);
      this.datatableColumns = ['name', 'ships', 'userName', 'actions'];
      // let allShips = [];
      // ships.forEach((ship)=>{
      //   allShips.push(ship.payload.doc.data());
      // }
      // )
      // console.log('all', allShips);
      this.dataTable = ships;

    });

  }

}