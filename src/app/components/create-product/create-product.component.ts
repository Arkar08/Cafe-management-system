import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {


  productForm:FormGroup = new FormGroup({
    name:new FormControl('',Validators.required),
    price:new FormControl('',Validators.required),
    category:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }


  create(){
    alert('product create succssfully')
    console.log(this.productForm.value)
  }
}
