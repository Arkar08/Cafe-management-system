import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productCount:any;
  categoryCount:any;
  constructor(private route:Router,private productService:ProductService ,private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getProduct();
    this.getCategory();
  }

  getProduct(){
    this.productService.getProduct().subscribe((res:any)=>{
      this.productCount = res.length;
    })
  }
  getCategory(){
    this.categoryService.getCategory().subscribe((res:any)=>{
      this.categoryCount = res.length;
    })
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
