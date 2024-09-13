import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  categoryForm:FormGroup = new FormGroup({
    name:new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }
  create(){
    alert('category add successfully')
    console.log(this.categoryForm.value)
  }
}
