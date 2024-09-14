import {Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCategoryComponent } from '../create-category/create-category.component';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/service/category.service';


export interface category{
  name:string,
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit  {
  categories:category[]=[];

  constructor(private dialog:MatDialog,private categoryService:CategoryService) { }


  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(){
    this.categoryService.getCategory().subscribe((res:any)=>{
      this.categories = res.map((r:any)=>{
        const data = r.payload.doc.data();
        data.id = r.payload.doc.id;
        console.log(data)
        return data;
      })
    })
  }

  displayedColumns: string[] = ['name','action'];

  add(){
    this.dialog.open(CreateCategoryComponent,{
      width:'800px'
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dat.filter = filterValue.trim().toLowerCase();
    console.log(filterValue)

  }
}
