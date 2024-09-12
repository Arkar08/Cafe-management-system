import { Component, OnInit } from '@angular/core';

export interface category{
  name:string,
  category:string,
  description:string,
  price:number
}
const ELEMENT_DATA: category[] = [
  {
    name:'coffee',
    category:'god',
    description:'blah blah',
    price:100
  },
  {
    name:'coffee',
    category:'god',
    description:'blah blah',
    price:100
  },
  {
    name:'coffee',
    category:'god',
    description:'blah blah',
    price:100
  },
  {
    name:'coffee',
    category:'god',
    description:'blah blah',
    price:100
  },
  {
    name:'coffee',
    category:'god',
    description:'blah blah',
    price:100
  },
]


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['name','category','description','price','action'];
  dataSource = ELEMENT_DATA;
}
