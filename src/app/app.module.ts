import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {enableProdMode} from '@angular/core';
// //routing
import { AppRoutingModule } from './app.routes';
//components
import { AppComponent } from './app.component';
import { SelectComponent } from './components/form/select/select.component';
import { FormComponent } from './containers/form/form.component';
import { LoginComponent } from './containers/login/login.component';
//services

//angular Material
import { MaterialsModule} from './materialModules';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule} from '@angular/material/core';
import { HttpClientModule} from '@angular/common/http';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';


import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { InputComponent } from './components/form/input/input.component';

// firebase
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// Auth
import { AuthService } from "./shared/services/auth.services";
import { dashboardComponent } from './containers/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { MenuComponent } from './containers/menu/menu.component';
import { AddshipComponent } from './components/form/addship/addship.component';
import { TableComponent } from './components/table/table.component';
// import { ConfirmDeleteComponent } from './components/table/table.component';

// containers
import { AdminComponent } from './containers/admin/admin.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { AddUserComponent } from './containers/add-user/add-user.component';
import { EditUserComponent } from './containers/edit-user/edit-user.component';
import { AddShipProfileComponent } from './components/form/add-ship-profile/add-ship-profile.component';
import { environment } from '../environments/environment';
import { OtherProfileComponent } from './containers/other-profile/other-profile.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { NewsComponent } from './components/news/news.component';
import { SortPipe } from './shared/sort.pipe';
import { ComentsComponent } from './shared/coments/coments.component';
import { NewDetailComponent } from './containers/new-detail/new-detail.component';
import { InsigniaComponent } from './components/insignia/insignia.component';
import { InsigniaService } from './shared/services/insignia.service';

// for test
var firebaseConfig = environment.firebaseConfig;


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
if(environment.production){
  enableProdMode()
}


@NgModule({
  imports:      [
    AppRoutingModule,
    BrowserModule,
    MaterialsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  entryComponents: [DialogComponent, ComentsComponent],
  providers: [AuthService,AngularFirestore, InsigniaService],
  declarations: [
    AppComponent,
    SelectComponent,
    FormComponent,
    InputComponent,
    LoginComponent,
    dashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    MenuComponent,
    AddshipComponent,
    TableComponent,
    AdminComponent,
    ProfileComponent,
    AddUserComponent,
    EditUserComponent,
    AddShipProfileComponent,
    OtherProfileComponent,
    DialogComponent,
    NewsComponent,
    SortPipe,
    ComentsComponent,
    NewDetailComponent,
    InsigniaComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
