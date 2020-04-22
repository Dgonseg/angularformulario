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
    console.log('getModel')
      // return this.db.collection('modelo').where("name", "==", brand)
      //   .get(

      //   ));

        this.db.collection("modelo").where("name", "==", brand)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
  }


  createModel(model) {
     return new Promise<any>((resolve, reject) =>{
        this.db
            .collection("modelo")
            .doc(model.brand.id)
            .add(model)
            .then(res => {}, err => reject(err));
    }); 
  }
}
