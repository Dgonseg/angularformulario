import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.services";
import { DataService } from "../../shared/services/data.services";
// import { Http, ResponseContentType} from '@angular/http'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class dashboardComponent implements OnInit {
  news: any;
  imagenUrl: any
  constructor(
    public authService: AuthService,
    private dataService: DataService,
    // private http: Http
    ) { }

  getImage(noticia: string){
    return noticia.imagenUrl;
  }

  ngOnInit() {
    this.dataService.getAllNews().subscribe((news)=>{
      console.log(this.news)
      this.news = news;
    });

  }

  addLike(noticia) {
    // let toSave = noticia;
    console.log(noticia);
    // let  id = 
    // let like = {
    //   like: 2,
    //   id: noticia.id
    // }
    // this.dataService.createOrUpdateLike(id, like);

  }

}