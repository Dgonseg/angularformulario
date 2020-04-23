import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  brand: any;
  db:any;

  constructor(db: AngularFirestore) {
    this.db = db;
  }

  getBrand(): Observable<any> {
    return this.db.collection('marca').snapshotChanges();
  }

  getModel(brand): Observable<any> {
    // this.db.collection("modelo")
    return  this.db.collection('modelo', ref => ref.where('brand', '==', brand))
                    .valueChanges({ name });
  }

  // create
  createModel(model) {
    return this.db.collection("modelo").doc(model.brand.id).set(model)
  }

  createUser(user): Observable<any> {
     return this.db.collection("users").add(user);   
  }

  getUser(mail): any {
    return  this.db.collection('users', ref => ref.where('mail', '==', mail))
                    .valueChanges({ mail });
  }

  getGameRoles(): Observable<any> {
    return this.db.collection('rol').snapshotChanges();
  }
}
