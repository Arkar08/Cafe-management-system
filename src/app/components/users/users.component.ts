import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/service/user.service';


export interface category{
  name:string,
  email:string,
  contact:number,
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUser();
  }


  displayedColumns: string[] = ['name','email','contact','action'];
  dataSource =new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getUser(){
    this.userService.getUser().subscribe((res:any)=>{
      this.dataSource = res.map((r:any)=>{
        const data = r.payload.doc.data();
        data.id = r.payload.doc.id;
        return data;
      })
    })
  }
}
