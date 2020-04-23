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
  org:String;
  

  constructor(
    public authService: AuthService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.name = "Erunshus";
    this.rol = " Comercio";
    this.naveFavorita = "Merchantmant";
    this.marcafavorita = "Banu";
    this.org = "CasualCore"
    this.personalDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
    let userMail = this.authService.getUserData();

    this.dataService.getUser(userMail.email)
      .subscribe((user)=> {
          this.name = user.username;
          this.rol = user.role;
          this.naveFavorita = user.favorit;
          this.org = user.org;
          this.personalDescription = user.description;
      })
  }

}