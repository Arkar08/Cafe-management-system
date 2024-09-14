import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth,private route:Router , private userService:UserService) { }

  login(data:any){
    this.auth.signInWithEmailAndPassword(data.email,data.password).then(()=>{
      localStorage.setItem('token',JSON.stringify(data))
      alert('login successfully.')
      console.log('login User',data);
      this.route.navigate(['cafe/dashboard'])
    }).catch(err=>{
      alert(err)
      console.log('login error',err)
      this.route.navigate(['/'])
    })
  }

  register(data:any){
    this.auth.createUserWithEmailAndPassword(data.email,data.password).then(()=>{
      alert('register successfully')
      console.log('register User',data)
      this.userService.addUser(data)
      this.route.navigate(['cafe/dashboard'])
    }).catch((err)=>{
      console.log('Register error',err)
      this.route.navigate(['/'])
    })
  }
}
