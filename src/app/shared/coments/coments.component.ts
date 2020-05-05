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


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.css']
})

export class ComentsComponent implements OnInit {
  coment: any;
  comentarios: any;

  constructor(
    public dialogRef: MatDialogRef<ComentsComponent>,
    private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


  ngOnInit() {
    this.coment = '';
    this.dataService.getComents(this.data.noticia.id)
    .subscribe((comentarios)=>{
      console.log('comentarios', comentarios)
      this.comentarios = comentarios;

    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  addComent() {
    console.log(this.coment);
    if(this.coment.length > 150){
      alert('Maximo 150 carácteres')
    }
    console.log(this.data);
    let coment = {
      coment: this.coment,
      usuario: this.data.user.username,
      idNoticia: this.data.noticia.id
    }
    this.dataService.createComent(coment);
    this.coment = ""

  }

}
