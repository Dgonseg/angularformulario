import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//components
import { AppComponent } from './app.component';
import { SelectComponent } from './components/form/select/select.component';
import { FormComponent } from './containers/form/form.component';
//services

//angular Material
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    SelectComponent,
    FormComponent,
    MatSelectModule ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
