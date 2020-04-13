import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SelectComponent } from './components/form/select/selectComponent'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SelectComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
