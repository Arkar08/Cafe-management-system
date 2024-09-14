import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  categoryForm:FormGroup = new FormGroup({
    name:new FormControl('',Validators.required)
  })
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
  }
  create(){
    // alert('category add successfully')
    console.log('category',this.categoryForm.value)
    this.categoryService.addCategory(this.categoryForm.value).then(()=>{
      alert('category create successfully');
    })
    .catch((err)=>{
      console.log('category create error',err)
    })
  }
}
