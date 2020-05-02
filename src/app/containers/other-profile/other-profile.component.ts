import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.services";
import { DataService } from "../../shared/services/data.services";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-other-profile',
  templateUrl: './other-profile.component.html',
  styleUrls: ['./other-profile.component.css']
})
export class OtherProfileComponent implements OnInit {

  
  name: String;
  rol: string;
  naveFavorita: string;
  marcafavorita: string;
  personalDescription: string;
  rango:String;
  showProfile: boolean = false
  userShips = [];
  datatableColumns = [];
  adminMode: boolean;
  userId: String;
     
  constructor(
    public authService: AuthService,
    private dataService: DataService,
    private activeRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.adminMode = true;
    this.userId = this.activeRouter.snapshot.paramMap.get('id');

    console.log(this.userId)

    this.datatableColumns = ['name', 'ships'];


    this.dataService.getUserId(this.userId) 
      .subscribe((user)=> {
        if(user.length > 0){
          this.userId = user[0].userId;
          this.name = user[0].username;
          this.rol = user[0].rolPrincipal.name;
          this.naveFavorita = user[0].favorite;
          this.rango = user[0].rango;
          this.personalDescription = user[0].descripcion;

          this.showProfile = true;
        }
      })
  }

}