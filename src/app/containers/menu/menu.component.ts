import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.services";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
     public authService: AuthService
  ) { }

  ngOnInit() {
  }

}