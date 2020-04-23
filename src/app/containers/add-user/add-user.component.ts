import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm = new FormGroup({
    userName: new FormControl([Validators.required]),
    rol: new FormControl([Validators.required]),
    favorite:  new FormControl([Validators.required]),
    descripcion: new FormControl([Validators.maxLength(255)]),
    org:  new FormControl()
  })

  constructor() { }

  ngOnInit() {
  }

  save(): void {
  // console.log(this.userForm); 

  }

}