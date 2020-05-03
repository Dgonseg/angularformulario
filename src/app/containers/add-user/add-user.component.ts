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
    rolprincipal: new FormControl([Validators.required]),
    rol: new FormControl(),
    favorite:  new FormControl([Validators.required]),
    rango:  new FormControl(),
    descripcion: new FormControl()
  })
  roles= [];
  userProfile: Profile;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {

    this.dataService.getGameRoles()
    .subscribe((roles) => {
      console.log('as',this.roles);
      roles.forEach((rol)=>{
        const dataRol = rol.payload.doc.data();
        this.roles.push(dataRol);
      })
      console.log(this.roles);
    })
  }

  save(): void {
    // local storage data
    let user = this.authService.getUserData();
    let userId = window.btoa(this.userForm.get('username').value);

    
    this.userProfile = {
      username: this.userForm.get('username').value,
      rolPrincipal: this.userForm.get('rolprincipal').value, 
      rol: this.userForm.get('rol').value,
      favorite:  this.userForm.get('favorite').value,
      rango: this.userForm.get('rango').value, 
      descripcion: this.userForm.get('descripcion').value,
      mail: user.email, 
      userId: userId,
      permiso: {id: '3', name: 'Usuario'}
    }

    this.saveLocalUserID(userId);

    this.dataService.createUser(this.userProfile);
    
    this.router.navigate(['profile']);
  }

  saveLocalUserID(userId) {
    localStorage.setItem('userId', userId);
  }
}