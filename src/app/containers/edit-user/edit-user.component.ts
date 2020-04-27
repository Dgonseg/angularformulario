import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {DataService} from '../../shared/services/data.services';
import { AuthService } from "../../shared/services/auth.services";
import {ActivatedRoute, Router} from '@angular/router';
import {Profile} from '../../shared/interfaces/profile';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  // userForm = new FormGroup({
  //   username: new FormControl([Validators.required]),
  //   rolprincipal: new FormControl([Validators.required]),
  //   rol: new FormControl(),
  //   favorite:  new FormControl([Validators.required]),
  //   rango:  new FormControl(),
  //   descripcion: new FormControl()
  // })
  userForm: FormGroup;
  roles= [];
  userProfile: Profile;
  selected: [];
  user: any;
  showForm= false;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private router: Router,
    private activeRouter: ActivatedRoute
    ) { }

  ngOnInit() {
    const userId = this.activeRouter.snapshot.paramMap.get('id');
    console.log('userId', userId);

    this.dataService.getUserId(userId)
    .subscribe((user) => {
      console.log('user', user[0])
      this.user = user[0];
      this.userForm = new FormGroup({
        username: new FormControl(user[0].username, [Validators.required]),
        rolprincipal: new FormControl(user[0].rolprincipal,[Validators.required]),
        rol: new FormControl(user[0].rol),
        favorite:  new FormControl(user[0].favorite,[Validators.required]),
        rango:  new FormControl(user[0].rango),
        descripcion: new FormControl(user[0].descripcion)
        
      })
     

    })

    this.dataService.getGameRoles()
    .subscribe((roles) => {
      console.log('as',this.roles);
      roles.forEach((rol)=>{
        const dataRol = rol.payload.doc.data();
        this.roles.push(dataRol);
      })

      this.selected = this.user.rol.filter((item) => {
        return this.roles.indexOf(item) === -1;
        }
      );
      console.log(this.selected);
      this.showForm= true;
    })
  }

  save(): void {
    // local storage data
    let user = this.authService.getUserData();
    let userId = window.btoa(this.userForm.get('username').value);

    console.log(user);
    console.log(userId);
    
    this.userProfile = {
      username: this.userForm.get('username').value,
      rolPrincipal: this.userForm.get('rolprincipal').value, 
      rol: this.userForm.get('rol').value,
      favorite:  this.userForm.get('favorite').value,
      rango:  this.userForm.get('rango').value, 
      descripcion: this.userForm.get('descripcion').value,
      mail: user.email, 
      userId: userId
    }

    this.saveLocalUserID(userId);

    this.dataService.createUser(this.userProfile);
    
    this.router.navigate(['profile']);
  }

  saveLocalUserID(userId) {
    localStorage.setItem('userId', userId);
  }

}