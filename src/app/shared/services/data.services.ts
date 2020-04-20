import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  brand: any;
  db:any;

  constructor(db: AngularFirestore) {
    this.db = db;
  }

  getMarcas() {
    return this.db.collection('marca').snapshotChanges();
  }

}