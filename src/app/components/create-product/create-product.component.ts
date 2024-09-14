import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  categoryList:any[]=[];

  productForm:FormGroup = new FormGroup({
    name:new FormControl('',Validators.required),
    price:new FormControl('',Validators.required),
    category:new FormControl(null,Validators.required),
    description:new FormControl('',Validators.required)
  })
  constructor(private productService:ProductService ,private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(){
    this.categoryService.getCategory().subscribe((res:any)=>{
      this.categoryList = res.map((r:any)=>{
        const data = r.payload.doc.data();
        data.id = r.payload.doc.id;
        console.log(data)
        return data;
      })
      console.log(this.categoryList)
    })
  }

  create(){
    this.productService.addProduct(this.productForm.value).then(()=>{
      alert('product create successfully.')
      console.log("product create",this.productForm.value)
    }).catch((error)=>{
      console.log('product create error',error)
      alert(error)
    })
  }
}
