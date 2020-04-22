import { Component, OnInit } from '@angular/core';

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
  

  constructor() { }

  ngOnInit() {
    this.name = "Erunshus";
    this.rol = " Comercio";
    this.naveFavorita = "Merchantmant";
    this.marcafavorita = "Banu";
    this.personalDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
  }

}