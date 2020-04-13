import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//components
import { AppComponent } from './app.component';
import { SelectComponent } from './components/form/select/select.component';
import { FormComponent } from './containers/form/form.component';
//services

//angular Material
import {MaterialsModule} from './materialModules';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { InputComponent } from './components/form/input/input.component';


@NgModule({
  imports:      [
    BrowserModule,
    MaterialsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    FormsModule ],
  declarations: [
    AppComponent,
    SelectComponent,
    FormComponent,
    InputComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
