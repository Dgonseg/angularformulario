import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "../../shared/services/data.services";

@Component({
  selector: 'app-insignia',
  templateUrl: './insignia.component.html',
  styleUrls: ['./insignia.component.css']
})
export class InsigniaComponent implements OnInit {
  @Input() userId: String;
  constructor() { }

  ngOnInit() {

  }

}