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
  
  constructor(
    public authService: AuthService,
    private dataService: DataService,
    // private http: Http
    ) { }

  getImage(imageUrl: string){
    // let header = {responseType: ResponseContentType.Blob}
    // return this.http.get(imageUrl, header).subscribe((res)=>{
    //   console.log(res);
    //   res.blob()
      
    // });
  }

  ngOnInit() {

    this.dataService.getAllNews().subscribe((news)=>{
      console.log(this.news)
      this.news = news;
    });

  }

}