import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  ViewChild
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { DataService } from "../../shared/services/data.services";
import { AuthService } from "../../shared/services/auth.services";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';

export interface ships {
  name: string;
  ships: number;
}

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
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: string[];
  dataSource: any;
  showtable = false;
  dataTableFormated: any;
  addActivate: false;
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
    private authService: AuthService
  ) {
    this.activateAdd = this.activateAdd.bind(this);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    console.log('this.modelModet',this.modelMode)
    
    if (!this.dataTable && !this.adminMode) {
      let userId = localStorage.getItem("userId");
      if (userId) {
        this.dataService.getUserModels().subscribe(models => {
        let filteredModels = models.filter(ship => {
          if (ship.userId === userId) {
            return ship;
          }
        });
        this.dataTable = filteredModels;
        this.dataSource = new MatTableDataSource(this.formatDataTable());
        this.displayedColumns = this.datatableColumns;
        this.dataSource.paginator = this.paginator;
        this.showtable = true;
      });

      }

    } else {
      console.log( this.datatableColumns)
      this.displayedColumns = this.datatableColumns;
      this.dataSource = new MatTableDataSource(this.formatDataTable());
      this.dataSource.paginator = this.paginator;
      this.showtable = true;
    }
  }

  refresh() {
    this.displayedColumns = this.datatableColumns;
    this.dataSource = new MatTableDataSource(this.dataTableFormated);
  }

  deleteShip(line) {
    if(this.dialogConfirm()) {
      this.dataService.deleteShip(line.id);
    }
  }

  deleteUser(line){
    if(this.dialogConfirm()) {
      this.dataService.deleteUser(line.id);
    }
  }
  
  formatDataTable(){
    let dataTableFormated = [];
    console.log(this.modelMode)
    switch(this.modelMode) {
      case 'ship':
        this.dataTable.forEach(line=>{
          dataTableFormated.push({
            id: line.id,
            name: line.name.name,
            ships: line.ships,
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
            ships: line.ships,
          })
        })
        return  dataTableFormated
    }

  }

  dialogConfirm(){
    return  confirm("Seguro que quieres borrar?");
  }

  activateAdd() {
    this.addActivate = !this.addActivate;
  }

  deleteModel(line) {
    if(this.dialogConfirm()) {
      this.dataService.deleteModel(line.id);
    }
  }
}
