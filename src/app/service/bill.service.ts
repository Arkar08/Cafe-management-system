import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private fireStore:AngularFirestore) { }

  addBill(data:any){
    console.log(data)
    return this.fireStore.collection('/bill').add(data);
  }

  getBill(){
    return this.fireStore.collection('/bill').snapshotChanges();
  }
}
