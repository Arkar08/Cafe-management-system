import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface category{
  name:string,
  email:string,
  contact:number,
  payment:string,
  total:number
}
const ELEMENT_DATA: category[] = [
  {
    name:'coffee',
    email:'sdfdsaf@gmai.com',
    contact:12344556,
    payment:'cash',
    total:10000
  },
  {
    name:'coffee',
    email:'sdfdsaf@gmai.com',
    contact:12344556,
    payment:'cash',
    total:10000
  },
  {
    name:'coffee',
    email:'sdfdsaf@gmai.com',
    contact:12344556,
    payment:'cash',
    total:10000
  },
  {
    name:'coffee',
    email:'sdfdsaf@gmai.com',
    contact:12344556,
    payment:'cash',
    total:10000
  },
  {
    name:'coffee',
    email:'sdfdsaf@gmai.com',
    contact:12344556,
    payment:'cash',
    total:10000
  },
]
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  displayedColumns: string[] = ['name','email','contact','payment','total','action'];
  dataSource =new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
