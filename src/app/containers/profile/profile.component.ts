import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.services";
import { DataService } from "../../shared/services/data.services";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.adminMode = false;
    let userId =  this.authService.getUserId();
    this.datatableColumns = ['name', 'ships', 'actions'];


    this.dataService.getUserId(userId) 
      .subscribe((user)=> {
        console.log('user', user)
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