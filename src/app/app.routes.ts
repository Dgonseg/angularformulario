import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//containers
import { FormComponent } from './containers/form/form.component';
import { LoginComponent } from './containers/login/login.component';

const routes: Routes = [
    {path: 'form' , component: FormComponent},
    {path: 'login' , component: LoginComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }