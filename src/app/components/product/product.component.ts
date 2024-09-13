import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateProductComponent } from '../create-product/create-product.component';
import { MatTableDataSource } from '@angular/material/table';
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

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['name','category','description','price','action'];
  dataSource = new  MatTableDataSource(ELEMENT_DATA);

  add(){
    this.dialog.open(CreateProductComponent,{
      width:'800px'
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
