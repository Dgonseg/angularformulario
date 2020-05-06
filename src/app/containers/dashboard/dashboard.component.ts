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
  goToDetail(noticia) {
    const id = noticia.id;


  }
  getDate(date){
    if(!!date){
      return new Date(date.seconds*1000);
    }
  }

  addLike(noticia) {
    let  id = noticia.id;
    noticia.favs = noticia.favs*1 + 1;
    console.log(!(!!noticia.userFavs))
    console.log(noticia.userFavs)
    if (!(!!noticia.userFavs)){
      noticia.userFavs = [];
    }else {
      noticia.userFavs.push(this.user[0].userId);
    }
    this.dataService.createOrUpdateLike(id, noticia);

  }

  userFav(noticia) {
    let ret = false;
    if(!!noticia.userFavs){
      if(noticia.userFavs.indexOf(this.user[0].userId)>-1){
        ret=  true;
      }
    }
    return ret;
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