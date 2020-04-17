import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  label: String;
  selectOptions: String[];
  selectOptions1: String[];
  selectOptions2: String[];
  selectOptions3: String[];
  constructor() { }

  ngOnInit() {
    this.label = "name";
    this.selectOptions = ['merchahn', 'def'];
    this.selectOptions1 = ['op4', 'op4', 'mustang'];
    this.selectOptions2 = ['op5', 'op5op2', 'op3'];
    this.selectOptions3 = ['op1', 'op2', 'op3'];
  }

  save() {
    console.log('save', this);
    
  }
}