import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//components
import { AppComponent } from './app.component';
import { SelectComponent } from './components/form/select/select.component';
import { FormComponent } from './containers/form/form.component';
//services

//angular Material
import {MaterialsModule} from './materialModules';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    MaterialsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule ],
  declarations: [
    AppComponent,
    SelectComponent,
    FormComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
