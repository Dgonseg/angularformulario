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
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  displayedColumns: string[];
  dataSource: any;

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
    console.log('test')
    if(!!this.dataTable) {
      let userId =  this.authService.getUserId();

      this.dataService.getUserModels(userId)
      .subscribe((models)=>{
        this.dataSource = new MatTableDataSource(this.dataTable);
      })
      

    } else {
      
    this.displayedColumns = this.datatableColumns;
    this.dataSource = new MatTableDataSource(this.dataTable);
    this.refresh()
    }

  }

  refresh() {
    this.displayedColumns = this.datatableColumns;
    this.dataSource = new MatTableDataSource(this.dataTable);
    // this.changeDetectorRefs.detectChanges();
  }

}
