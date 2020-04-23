import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {DataService} from '../../shared/services/data.services';
import { AuthService } from "../../shared/services/auth.services";

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
    private authService: AuthService
    ) { }

  ngOnInit() {
  }

  save(): void {
    console.log('user', this.authService.getUserData())
    this.userProfile = {
      username: this.userForm.get('username').value,
      rol: this.userForm.get('rol').value,
      favorite:  this.userForm.get('favorite').value,
      org:  this.userForm.get('org').value,
      descripcion: this.userForm.get('descripcion').value,
      mail: this.authService.getUserData()
    }
    console.log(this.userProfile);
    this.dataService.createUser(this.userProfile)
    .then((result)=>{
      console.log('go to dashboard')
    })
  }
}