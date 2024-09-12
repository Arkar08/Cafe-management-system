import { Component, OnInit } from '@angular/core';


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
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['name','action'];
  dataSource = ELEMENT_DATA;
}
