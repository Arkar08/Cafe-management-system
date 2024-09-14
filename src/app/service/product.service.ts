import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private fireStore:AngularFirestore) { }

  addProduct(data:any){
    console.log(data)
    return this.fireStore.collection('/product').add(data);
  }

  getProduct(){
    return this.fireStore.collection('/product').snapshotChanges();
  }
}
