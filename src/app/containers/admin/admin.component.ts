import { Component, OnInit } from '@angular/core';
import { DataService } from "../../shared/services/data.services";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  //ships for users
  datatableColumns: any;
  dataTable: any;
  // /models
  dataModelTable: any;
  datatableModelColumns: any;

//users
  datatableUserColumns: any;
  datatableUser: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getUserModels();
    this.getModels();
    this.getUser();
  }

  getUserModels() {
    this.dataService.getUserModels().subscribe((ships)=>{
      this.datatableColumns = ['name', 'ships', 'userName', 'actions'];
      this.dataTable = ships;
    });

  }

  getModels() {
    this.dataService.getModels().subscribe((ships)=>{
  
      this.datatableModelColumns = ['brand', 'model', 'deleteModels'];
      this.dataModelTable = ships;
    });
  }

  getUser() {
    console.log('allUsers')
    this.dataService.getAllUser().subscribe((users)=>{
      console.log('getAllUser', users)
      this.datatableUserColumns = ['username', 'rango', 'deleteUser'];
      this.datatableUser = users;
    });
  }

}