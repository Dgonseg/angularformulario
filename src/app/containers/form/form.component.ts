import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { TableComponent } from "../../components/table/table.component";
import { DataService } from "../../shared/services/data.services";
import { AuthService } from "../../shared/services/auth.services";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  @ViewChild(TableComponent) tableComponent: TableComponent;
  @Input() adminMode: boolean;

  selectOptions: String[];
  selectOptions1: String[];
  selectOptions2: String[];
  selectOptions3: String[];
  selectLabelBanu: String;
  // /new
  selectShipsbyBrandOptions: String[];
  selectBrandOptions: String[];
  dataTable: any;
  datatableColumns: String[];
  brands = [];
  brandModels = [];
  showComponent = true;
  selectedBrand: any;

  constructor(
    private db: DataService,
    public authService: AuthService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getBrand();
    this.selectBrandOptions = [];
    this.dataTable = [];
  }

  populateTable($event) {
    let userId = this.authService.getUserId();
    let userName = window.atob(userId);

    // let userMail = this.authService.getUserData();
    console.log("userId", userName);

    var saveShip = $event;
    saveShip.userId = userId;
    saveShip.userName = userName;
    this.dataService.createUserModels(saveShip);
  }

  getBrand() {
    this.db.getBrand().subscribe(
      brands => {
        var test = [];
        brands.forEach((brand: any) => {
          this.brands.push({
            id: brand.payload.doc.id,
            data: brand.payload.doc.data()
          });
        });
      },
      ko => {
        console.log("ko", ko);
      }
    );
  }

  selectBrad($event) {
    console.log("thuis!!!!", $event);
    this.getmodel($event);
  }

  getmodel(brand) {
    this.showComponent = false;

    this.db.getModel(brand).subscribe(models => {
      console.log("models", models);
      this.brandModels = models;
      this.selectedBrand = brand;
      this.showComponent = true;
    });
  }
}
