import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  brand: any;
  db:any;

  private userModels: AngularFirestoreCollection<any>;

  constructor(db: AngularFirestore) {
    this.db = db;
  }

  getBrand(): Observable<any> {
    return this.db.collection('marca').snapshotChanges();
  }

  getShips(): Observable<any> {
    return this.db.collection('usermodels').snapshotChanges();
  }
  getModels():  Observable<any> {
    this.userModels = this.db.collection('modelo');

    return  this.userModels.snapshotChanges().pipe(
            map(actions => actions.map(a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return { id, ...data };
            }))
          );

  }

  getModel(brand): Observable<any> {
    return  this.db.collection('modelo', ref => ref.where('brand', '==', brand))
                    .valueChanges({ name });
  }

  deleteShip(id){
    return  this.db.collection('usermodels').doc(id).delete();
  }

  // create
  createModel(model) {
    return this.db.collection("modelo").doc(model.brand.id).set(model)
  }

  createUserModels(userModel) {
    console.log('createUserModels',userModel );
    return this.db.collection("usermodels").add(userModel);
  }

  createUser(user): Observable<any> {
     return this.db.collection("users").add(user);   
  }

  getUser(mail): any {
    return  this.db.collection('users', ref => ref.where('mail', '==', mail)).valueChanges({ mail });
  }
  getUserId(userId): any {
    return  this.db.collection('users', ref => ref.where('userId', '==', userId)).valueChanges({userId});
  }

  getUserByEmail(mail) {
    return  this.db.collection('users', ref => ref.where('mail', '==', mail)).valueChanges({ mail });    
  }

  getUserModels() {
    this.userModels = this.db.collection('usermodels');

   return  this.userModels.snapshotChanges().pipe(
          map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          }))
        );

  }
  

  getGameRoles(): Observable<any> {
    return this.db.collection('rol').snapshotChanges();
  }
}
