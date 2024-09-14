import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  signUpForm:FormGroup = new FormGroup(
    {
      name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      contact:new FormControl('',Validators.required)
    }
  )
  constructor(private route:Router ,private auth:AuthService) { }

  ngOnInit(): void {
  }

  signUp(){
    console.log(this.signUpForm.value)
    this.auth.register(this.signUpForm.value)
  }
}
