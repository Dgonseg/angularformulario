import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  label: String;
  selectOptions: String[];
  constructor() { }

  ngOnInit() {
    this.label = "name";
    this.selectOptions = ['op1', 'op2', 'op3'];
  }

  save() {
    console.log('save');
    
  }
}