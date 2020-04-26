import { Component, OnInit,Input,ChangeDetectorRef,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DataService } from "../../shared/services/data.services";
import { AuthService } from '../../shared/services/auth.services';



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
  @Input() adminMode: any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  displayedColumns: string[];
  dataSource: any;
  showtable = false;

  constructor(
    private changeDetectorRefs: ChangeDetectorRef,
    private dataService: DataService,
    private authService: AuthService
  ) { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  

  ngOnInit() {
    if(!this.dataTable && !this.adminMode) {
      let userId = localStorage.getItem('userId');
      this.dataService.getUserModels(userId)
      .subscribe((models)=>{
        console.log(models);
        this.dataSource = new MatTableDataSource(models);
        this.displayedColumns = this.datatableColumns;
        this.showtable = true;

      })
    } else {
      this.displayedColumns = this.datatableColumns;
      this.dataSource = new MatTableDataSource(this.dataTable);
      this.showtable = true;
    }

  }

  refresh() {
    this.displayedColumns = this.datatableColumns;
    this.dataSource = new MatTableDataSource(this.dataTable);
    // this.changeDetectorRefs.detectChanges();
  }

}
