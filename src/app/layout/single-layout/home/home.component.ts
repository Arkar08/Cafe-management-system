import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/components/login/login.component';
import { SignupComponent } from 'src/app/components/signup/signup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
    
  }
  login(){
    console.log('login')
    this.dialog.open(LoginComponent,{
      width: '500px',
    })
  }
  signUp(){
    console.log('signup')
    this.dialog.open(SignupComponent,{
      width: '500px',
    })
  }
}
