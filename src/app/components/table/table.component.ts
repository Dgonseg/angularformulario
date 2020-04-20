import { Component, OnInit,Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';




export interface ships {
  name: string;
  ships: number;

}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  @Input() dataTable: any;
  @Input() datatableColumns: any;


  displayedColumns: string[];
  dataSource: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit() {
    this.displayedColumns = this.datatableColumns;
    this.dataSource = new MatTableDataSource(this.dataTable);
  }

}
