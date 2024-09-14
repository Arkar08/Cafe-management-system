import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private fireStore:AngularFirestore) { }

  addUser(data:any){
    console.log(data)
    return this.fireStore.collection('/user').add(data);
  }

  getUser(){
    return this.fireStore.collection('/user').snapshotChanges()
  }
}
