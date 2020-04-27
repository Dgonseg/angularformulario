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
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: string[];
  dataSource: any;
  showtable = false;
  dataTableFormated: any;
  addActivate: false;

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
        this.showtable = true;
      });

      }

    } else {
      this.displayedColumns = this.datatableColumns;
      
      this.dataSource = new MatTableDataSource(this.formatDataTable());
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
  
  formatDataTable(){
    let dataTableFormated = [];
    this.dataTable.forEach(line=>{
      console.log(line)
      dataTableFormated.push({
        id: line.id,
        name: line.name.name,
        ships: line.ships,
        userName: line.userName
      })
    })
    console.log(dataTableFormated)
    return  dataTableFormated

  }

  dialogConfirm(){
    return  confirm("Seguro que quieres borrar?");
  }

  activateAdd() {
    this.addActivate = !this.addActivate;
  }
}
