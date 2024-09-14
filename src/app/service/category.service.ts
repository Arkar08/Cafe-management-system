import { Injectable, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'


@Injectable({
  providedIn: 'root'
})
export class CategoryService implements OnInit {
  constructor(private fireStore:AngularFirestore) { }

  ngOnInit(): void {
  }


  addCategory(data:any){
    console.log(data)
    return this.fireStore.collection('/category').add(data);
  }

  getCategory(){
    return this.fireStore.collection('/category').snapshotChanges();
  }
}
