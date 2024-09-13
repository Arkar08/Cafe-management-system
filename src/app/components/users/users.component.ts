import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface category{
  name:string,
  email:string,
  contact:number,
}
const ELEMENT_DATA: category[] = [
  {
    name:'coffee',
    email:'sdfdsaf@gmai.com',
    contact:12344556
  },
  {
    name:'coffee',
    email:'sdfdsaf@gmai.com',
    contact:12344556
  },
  {
    name:'coffee',
    email:'sdfdsaf@gmai.com',
    contact:12344556
  },
  {
    name:'coffee',
    email:'sdfdsaf@gmai.com',
    contact:12344556
  },
  {
    name:'coffee',
    email:'sdfdsaf@gmai.com',
    contact:12344556
  },
]
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  displayedColumns: string[] = ['name','email','contact','action'];
  dataSource =new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
