import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.services";
import { DataService } from "../../shared/services/data.services";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  permiso: String;
  constructor(
     public authService: AuthService,
     private dataService: DataService
  ) { }

  ngOnInit() {
    
    this.dataService.getUserId(localStorage.getItem("userId"))
    .subscribe((user)=>{
      console.log(user)
      this.permiso = user[0].permiso.id;
    })
  }

}