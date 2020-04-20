import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.services";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class dashboardComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}