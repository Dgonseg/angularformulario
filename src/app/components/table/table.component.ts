import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  ViewChild,
  Inject
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { DataService } from "../../shared/services/data.services";
import { AuthService } from "../../shared/services/auth.services";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import { Router } from '@angular/router';
import {MatSort} from '@angular/material/sort';
import { DialogComponent } from '../../shared/dialog/dialog.component';

export interface ships {
  name: string;
  ships: number;
}
//table component

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  @Input() dataTable: any;
  @Input() datatableColumns: any;
  @Input() adminMode: any;
  @Input() modelMode: any;
  @Input() userId: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[];
  dataSource: any;
  showtable = false;
  dataTableFormated: any;
  addActivate: false;
  sortedDataTable:any;
  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  constructor(
    private changeDetectorRefs: ChangeDetectorRef,
    private dataService: DataService,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.activateAdd = this.activateAdd.bind(this);
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    if (!this.dataTable && (!this.adminMode || !!this.userId)) {
      let userId
      if(!this.userId){
        userId = localStorage.getItem("userId");

      } else {
        userId = this.userId;
      }
      console.log(userId) 
      if (userId) {
        this.dataService.getUserModels().subscribe(models => {
        let filteredModels = models.filter(ship => {
          if (ship.userId === userId) {
            return ship;
          }
        });
        this.dataTable = filteredModels;
        this.dataTable = this.formatDataTable();
        this.dataSource = new MatTableDataSource(this.dataTable);  
        this.displayedColumns = this.datatableColumns;
        if(this.dataTable.length > 0) {
          this.showtable = true;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      });

      }

    } else {
      this.displayedColumns = this.datatableColumns;
      this.dataTable = this.formatDataTable();
      this.dataSource = new MatTableDataSource(this.dataTable);
      
      if(this.dataTable.length >0) {
        this.showtable = true;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;


      }
    }
  }

  refresh() {
    this.displayedColumns = this.datatableColumns;
    this.dataSource = new MatTableDataSource(this.dataTableFormated);
  }

  deleteShip(line) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == 'ok'){
        this.dataService.deleteShip(line.id);
      }
    });
  }

  deleteUser(line){
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == 'ok'){
       this.dataService.deleteUser(line.id);
      }
    });
  }
  
  formatDataTable(){
    let dataTableFormated = [];

    switch(this.modelMode) {
      case 'ship':
        this.dataTable.forEach(line=>{
          dataTableFormated.push({
            id: line.id,
            name: line.name.name,
            ship: line.ships[0].model,
            userName: line.userName
          })
        })
        return  dataTableFormated

      break;

      case 'model':
        this.dataTable.forEach(line=>{
          dataTableFormated.push({
            brand:line.brand.name,
            model: line.model,
            id: line.id
          })
        })
        return  dataTableFormated

      break;
      case 'users':
        this.dataTable.forEach(line=>{
          console.log('line', line);
          dataTableFormated.push({
            id: line.id,
            userId: line.userId,
            username:line.username,
            rango: line.rango
          })
        })
        console.log(dataTableFormated)
        return  dataTableFormated

      break;

      case 'profile':
       this.dataTable.forEach(line=>{
          dataTableFormated.push({
            id: line.id,
            name: line.name.name,
            ship:  line.ships[0].model,
          })
        })
        return  dataTableFormated
    }

  }

  activateAdd() {
    this.addActivate = !this.addActivate;
  }

  deleteModel(line) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed', result);
      if(result == 'ok'){
        this.dataService.deleteModel(line.id);
      }
    });
  }

  viewUser(line) {
    this.router.navigate(['otherProfile/', line.userId]);
  }

}