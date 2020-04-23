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

  getModel(brand):any {
    // console.log('getModel')
    // debugger
    this.db.collection("modelo") 
    // .get()
    // .then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // })
    // .catch(function(error) {
    //     console.log("Error getting documents: ", error);
    // });

  }

  // create
  createModel(model) {
    console.log(model);
    this.db.collection("modelo").doc(model.brand.id).set(model)
    //  return new Promise<any>((resolve, reject) =>{
    //     this.db
    //         .collection("modelo")
    //         .doc(model.brand.id)
    //         .add(model)
    //         .then(res => {}, err => reject(err));
    // }); 
  }

  createUser(user): Observable<any> {
     return  this.db.collection("users").add(user)     
  }

  getUser(mail): any {
    return  this.db.collection('users', ref => ref.where('mail', '==', mail))
                    .valueChanges({ mail });
  }
  //  return  this.db.collectionGroup('users')
  //  .snapshotChanges()
  //  .map(function (data) {
  //    if(data.payload.doc.data().mail == mail) {
  //      return data.payload.doc.data();
  //    }
  //  })
  // }
}
