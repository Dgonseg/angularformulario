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
  userForm = new FormGroup({
    username: new FormControl([Validators.required]),
    rolprincipal: new FormControl([Validators.required]),
    rol: new FormControl(),
    favorite:  new FormControl([Validators.required]),
    rango:  new FormControl(),
    descripcion: new FormControl(),
  })
  // userForm: FormGroup;
  roles= [];
  userProfile: Profile;
  selected: [];
  user: any;
  showForm= false;
  selectedRolPrincipal : any;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private router: Router,
    private activeRouter: ActivatedRoute
    ) { }

  ngOnInit() {
    const userId = this.activeRouter.snapshot.paramMap.get('id');

    this.dataService.getGameRoles()
    .subscribe((roles) => {
      if(roles.length >0 ){
        roles.forEach((rol)=>{
          const dataRol = rol.payload.doc.data();
          this.roles.push(dataRol);
        })
      }
       
      this.dataService.getUserId(userId)
      .subscribe((user) => {
        this.user = user[0];
        console.log(user)
        this.selectedRolPrincipal = user[0].rolPrincipal;
        
        const toSelectRol = this.roles.find(c => c.id == user[0].rolPrincipal.id);
        let  toSelectOtherRol =  [];

        if(user[0].rol.length > 0){
          this.roles.forEach((rol) => {
            user[0].rol.forEach((userRol)=> {
              if(rol.id==userRol.id){
                toSelectOtherRol.push(userRol.id);
              }
            })
          })
        }


        this.userForm.setValue({
          username: user[0].username,
          rolprincipal: toSelectRol,
          rol:toSelectOtherRol,
          favorite: user[0].favorite,
          rango: '',//user[0].rango,
          descripcion:user[0].descripcion,
        });

        this.showForm= true;
      })
    })
  }

  save(): void {
    // local storage data
    let user = this.authService.getUserData();
    let userId = window.btoa(this.userForm.get('username').value);

    const rolsId = this.userForm.get('rol').value;
    const userRols: any = [];
    this.roles.forEach((rol) => {
        if(rolsId.indexOf(rol.id)> -1){
          userRols.push(rol)
        }
    })

    this.userProfile = {
      username: this.userForm.get('username').value,
      rolPrincipal: this.userForm.get('rolprincipal').value, 
      rol: userRols,
      favorite:  this.userForm.get('favorite').value,
      rango: '',// this.userForm.get('rango').value, 
      descripcion: this.userForm.get('descripcion').value,
      mail: this.user.mail, 
      userId: this.user.userId,
      permiso: this.user.permiso
    }

    this.dataService.getAllUser()
    .subscribe((users)=>{
      console.log(users)
      let docID = null
      users.forEach((user)=>{
        if(user.userId === this.userProfile.userId){
          docID =  user.id;
        }
      })
      this.dataService.updateUser(this.userProfile, docID);
      this.router.navigate(['profile']);

    })
    
    
  }

  saveLocalUserID(userId) {
    localStorage.setItem('userId', userId);
  }

}