import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForms:FormGroup  = new FormGroup(
    {
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    }
  )

  constructor(private router:Router , private auth:AuthService) { }

  ngOnInit(): void {
  }


  login(){
    console.log(this.loginForms.value)
    this.auth.login(this.loginForms.value)
  }

}
