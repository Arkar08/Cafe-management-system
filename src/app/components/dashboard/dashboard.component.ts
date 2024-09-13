import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }


  category(){
    this.route.navigate(['cafe/category'])
  }
  product(){
    this.route.navigate(['cafe/product'])
  }
  bill(){
    this.route.navigate(['cafe/bill'])
  }
}
