import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {DataService} from '../../shared/services/data.services';
import { AuthService } from "../../shared/services/auth.services";
import { Router } from "@angular/router";
import {Profile} from '../../shared/interfaces/profile';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm = new FormGroup({
    username: new FormControl([Validators.required]),
    rol: new FormControl([Validators.required]),
    favorite:  new FormControl([Validators.required]),
    org:  new FormControl(),
    descripcion: new FormControl()
  })

  userProfile: Profile;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  save(): void {
    // local storage data
    let userMail = this.authService.getUserData();

    this.userProfile = {
      username: this.userForm.get('username').value,
      rol: this.userForm.get('rol').value,
      favorite:  this.userForm.get('favorite').value,
      org:  this.userForm.get('org').value,
      descripcion: this.userForm.get('descripcion').value,
      mail: userMail.mail
    }

    this.dataService.createUser(this.userProfile)
    .subscribe((result) => {
      this.router.navigate(['profile']);
    })
  }
}