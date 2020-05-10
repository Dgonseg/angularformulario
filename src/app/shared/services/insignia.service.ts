import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InsigniaService {
  db:any;
   private Insignia: AngularFirestoreCollection<any>;

  constructor(db: AngularFirestore) {
    this.db = db;
  }

  // getAll(): Observable<any> {
  //   this.Insignia = this.db.collection('Insignia');

  //   return  this.userModels.snapshotChanges().pipe(
  //           map(actions => actions.map(a => {
  //             const data = a.payload.doc.data();
  //             const id = a.payload.doc.id;
  //             return { id, ...data };
  //           }))
  //         );
  // }

}