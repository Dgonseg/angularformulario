import { Component, OnInit,Input,ChangeDetectorRef,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
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
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  displayedColumns: string[];
  dataSource: any;

  constructor(private changeDetectorRefs: ChangeDetectorRef) { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  

  ngOnInit() {
    this.displayedColumns = this.datatableColumns;
    this.dataSource = new MatTableDataSource(this.dataTable);
    this.refresh()
  }

  refresh() {
    this.displayedColumns = this.datatableColumns;
    this.dataSource = new MatTableDataSource(this.dataTable);
    // this.changeDetectorRefs.detectChanges();
  }

}
