import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Auth
import { AuthService } from "./shared/services/auth.services";
import { dashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const firebaseConfig = {
  apiKey: "AIzaSyDmeg09xntmdUxvyJwIxAWFAOC_Z0UTGzQ",
  authDomain: "hformulario-b0a55.firebaseapp.com",
  databaseURL: "https://hformulario-b0a55.firebaseio.com",
  projectId: "hformulario-b0a55",
  storageBucket: "hformulario-b0a55.appspot.com",
  messagingSenderId: "267439002356",
  appId: "1:267439002356:web:9eb8bb49dbd407ca5244a1"
};

@NgModule({
  imports:      [
    AppRoutingModule,
    BrowserModule,
    MaterialsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [AuthService],
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
    VerifyEmailComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
