import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../shared/services/data.services';
import { MatDialog } from '@angular/material/dialog';
import { ComentsComponent } from '../../shared/coments/coments.component';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.css']
})
export class NewDetailComponent implements OnInit {
  user: any;
  noticia: any;
  constructor(
    private activeRouter: ActivatedRoute,
    private dataService: DataService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    const newId = this.activeRouter.snapshot.paramMap.get('id');
    this.dataService.getUserId(localStorage.getItem("userId"))
    .subscribe((user)=>{
      this.user = user;
    })
    this.dataService.getNew(newId)
    .subscribe((noticia)=>{
      this.noticia = noticia[0];
    })

  }
  getImage(noticia: string){
    return noticia.imagenUrl;
  }

  getDate(date){
    if(!!date){
      return new Date(date.seconds*1000);
    }
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