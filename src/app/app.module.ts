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
import { AuthService } from "./services/auth.service";


var config = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
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
  declarations: [
    AppComponent,
    SelectComponent,
    FormComponent,
    InputComponent,
    LoginComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
