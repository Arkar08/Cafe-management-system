import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangePasswordComponent } from 'src/app/components/change-password/change-password.component';

@Component({
  selector: 'app-single-layout',
  templateUrl: './single-layout.component.html',
  styleUrls: ['./single-layout.component.css']
})
export class SingleLayoutComponent implements OnInit {
  open:boolean = true;

  constructor(private dialog:MatDialog,private router:Router) { }

  ngOnInit(): void {
  }

  openToggle(){
    this.open = ! this.open
  }

  change(){
    this.dialog.open(ChangePasswordComponent,{
      width: '500px',
    })
  }
  logout(){
    console.log('hello')
    alert('log out successfully')
    this.router.navigate(['/'])
  }
}
