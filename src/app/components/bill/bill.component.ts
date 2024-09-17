import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import jsPDF from 'jspdf';
import * as FileSaver from 'file-saver'
import { BillService } from 'src/app/service/bill.service';

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
  getBillSlip:any;
  dataSource:any;
  constructor(private bill:BillService) { }

  ngOnInit(): void {
    this.getBillView();
  }

  pdfSrc:any;
  data = {
    name:'Arkar',
    email:'arkar@gmail.com'
  }
  
  displayedColumns: string[] = ['name','email','contact','payment','total','action'];
  

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
  
  getBill(){
    const doc = new jsPDF();
    const content = `Name: ${this.data.name}\n\n Email:${this.data.email}`;
    doc.text(content,10,10)
    const pdf = doc.output('blob');
    FileSaver.saveAs(pdf,'template.pdf')
  }

  getBillView(){
    this.bill.getBill().subscribe((res:any)=>{
      this.getBillSlip = res.map((r:any)=>{
        const data = r.payload.doc.data();
        data.id = r.payload.doc.id;
        return data;
      })
      console.log(this.getBillSlip)
      this.dataSource = new MatTableDataSource(this.getBillSlip)
      console.log(this.dataSource.data)
    })
  }
}
