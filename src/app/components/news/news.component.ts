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
    imagenUrl: new FormControl([Validators.required])
  })

  constructor(private dataService: DataService,) { }

  ngOnInit() {
  }

  save() {
    console.log(this.newForm.get('titulo').value);
    console.log(this.newForm.get('subtitulo').value);
    console.log(this.newForm.get('contenido').value);
    console.log(this.newForm.get('imagenUrl').value);
    
    let news = {
       titulo: this.newForm.get('titulo').value,
       subtitulo: this.newForm.get('subtitulo').value,
       contenido: this.newForm.get('contenido').value,
       imagenUrl: this.newForm.get('imagenUrl').value,
     }
    this.dataService.createNew(news);
  }

}