import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.services";
import { DataService } from "../../shared/services/data.services";
// import { Http, ResponseContentType} from '@angular/http'; 
import { ComentsComponent } from '../../shared/coments/coments.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class dashboardComponent implements OnInit {
  news: any;
  imagenUrl: any;
  user: any;
  constructor(
    public authService: AuthService,
    private dataService: DataService,
    public dialog: MatDialog
    // private http: Http
    ) { }

  getImage(noticia: string){
    return noticia.imagenUrl;
  }

  ngOnInit() {
     this.dataService.getUserId(localStorage.getItem("userId"))
    .subscribe((user)=>{
      console.log(user)
      this.user = user;
    })

    this.dataService.getAllNews().subscribe((news)=>{
      console.log(this.news)
      this.news = news;
    });

  }

  addLike(noticia) {
    let  id = noticia.id;
    noticia.favs = noticia.favs*1 + 1;
  
    this.dataService.createOrUpdateLike(id, noticia);

  }

  addComentarios(noticia) {
    console.log(noticia);
    let data = {
      noticia: noticia,
      user: this.user[0]
    }
     const dialogRef = this.dialog.open(ComentsComponent, {
      width: '500px',
       data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == 'ok'){
        // this.dataService.deleteShip(line.id);
      }
    });

  }

}