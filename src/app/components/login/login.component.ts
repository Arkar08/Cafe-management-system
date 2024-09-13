import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForms:FormGroup  = new FormGroup(
    {
      userName: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    }
  )

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  login(){
    alert('login is successfully')
    console.log(this.loginForms.value)
    this.router.navigate(['cafe/dashboard'])
  }

}
