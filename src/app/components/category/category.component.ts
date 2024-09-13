import {Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCategoryComponent } from '../create-category/create-category.component';
import { MatTableDataSource } from '@angular/material/table';


export interface category{
  name:string,
}
const ELEMENT_DATA: category[] = [
  {
    name:'coffee',
  },
  {
    name:'tea',
  },
  {
    name:'Doughnut',
  }
  ,{

    name:'Pizza',
  },
  {
    name:'Sandwich',
  }
]

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit  {


  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
    
  }
  displayedColumns: string[] = ['name','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  add(){
    this.dialog.open(CreateCategoryComponent,{
      width:'800px'
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }
}
