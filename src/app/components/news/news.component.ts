import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { DataService } from "../../shared/services/data.services";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
   newForm = new FormGroup({
    titulo: new FormControl([Validators.required]),
    subtitulo: new FormControl([Validators.required]),
    contenido: new FormControl(),
    contenidoExtendido: new FormControl(),
    imagenUrl: new FormControl([Validators.required]),
    orderId: new FormControl([Validators.required]),
    date: new FormControl(),
  })

  
  noticia: any;
  constructor(private dataService: DataService,) { }

  ngOnInit() {
  }
  getImage(noticia: string){
    return noticia.imagenUrl;
  }


  save() {
    console.log(this.newForm.get('titulo').value);
    console.log(this.newForm.get('subtitulo').value);
    console.log(this.newForm.get('contenidoExtendido').value);
    console.log(this.newForm.get('imagenUrl').value);
    console.log(this.newForm.get('date').value.toString());
    console.log(new Date(this.newForm.get('date').value));
    
    let news = {
       titulo: this.newForm.get('titulo').value,
       subtitulo: this.newForm.get('subtitulo').value,
       contenido: this.newForm.get('contenido').value,
       contenidoExtendido: this.newForm.get('contenidoExtendido').value,
       imagenUrl: this.newForm.get('imagenUrl').value,
       favs: '0',
       orderId: this.newForm.get('orderId').value,
       date: new Date(this.newForm.get('date').value)
     }
    // this.dataService.createNew(news);
  }

  previa(){
    this.noticia = {
       titulo: this.newForm.get('titulo').value,
       subtitulo: this.newForm.get('subtitulo').value,
       contenido: this.newForm.get('contenido').value,
       imagenUrl: this.newForm.get('imagenUrl').value,
       favs: '0',
       orderId: this.newForm.get('orderId').value,
       date:  new Date(this.newForm.get('date').value)
    }
  }

}