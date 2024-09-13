import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  signUpForm:FormGroup = new FormGroup(
    {
      userName:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      contact:new FormControl('09',Validators.required)
    }
  )
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  signUp(){
    alert('signUp successfully');
    console.log(this.signUpForm.value)
    this.route.navigate(['/cafe/dashboard'])
  }
}
