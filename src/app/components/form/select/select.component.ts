import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'form-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() selectOptions: String[];
  toppings : FormControl
  toppingList: string[];
  constructor() { }

  ngOnInit() {
    this.toppings = new FormControl();
    this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  }

}