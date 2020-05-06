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
  private allNews: AngularFirestoreCollection<any>;

  constructor(db: AngularFirestore) {
    this.db = db;
  }

  getBrand(): Observable<any> {
    return this.db.collection('marca').snapshotChanges();
  }

  getAllUser(): Observable<any> {
    this.userModels = this.db.collection('users');

    return  this.userModels.snapshotChanges().pipe(
            map(actions => actions.map(a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return { id, ...data };
            }))
          );
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

  deleteUser(id) {
    return  this.db.collection('users').doc(id).delete();
  }


  deleteModel(id){
    console.log('delete', id)
    return  this.db.collection('modelo').doc(id).delete();
  }
  // create
  createModel(model) {
    return this.db.collection("modelo").add(model)
  }

  createOrUpdateLike(id,noticia) {
    return this.db.collection("news").doc(id).set(noticia); 
  }

  createComent(coment){
     return this.db.collection("Coments").add(coment); 

  }
  createNew(news) {
    return this.db.collection("news").add(news);
  }

  createUserModels(userModel) {
    return this.db.collection("usermodels").add(userModel);
  }

  createUser(user): Observable<any> {
     return this.db.collection("users").add(user);   
  }

  getComents(idNoticia){
    return  this.db.collection('Coments', ref => ref.where('idNoticia', '==', idNoticia)).valueChanges({ idNoticia });

  }

  getNew(orderId) {
    return  this.db.collection('news', ref => ref.where('orderId', '==', orderId)).valueChanges({ orderId });

  }

  getUser(mail): any {
    return  this.db.collection('users', ref => ref.where('mail', '==', mail)).valueChanges({ mail });
  }
  getUserId(userId): any {
    return  this.db.collection('users', ref => ref.where('userId', '==', userId)).valueChanges({userId})
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

  getAllNews() {
    this.allNews = this.db.collection('news');

   return  this.allNews.snapshotChanges().pipe(
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

  updateUser(user, id):any{
    this.deleteUser(id);
    return this.db.collection("users").add(user);
  }


  
}

