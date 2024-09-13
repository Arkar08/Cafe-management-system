import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import * as FileSaver from 'file-saver'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  pdfSrc:any;
  data = {
    name:'Arkar',
    email:'arkar@gmail.com'
  }
  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name','category','price','quantity','total','delete'];
  // dataSource = ELEMENT_DATA;

  getBill(){
    const doc = new jsPDF();
    const content = `Name: ${this.data.name}\n\n Email:${this.data.email}`;
    doc.text(content,10,10)
    const pdf = doc.output('blob');
    FileSaver.saveAs(pdf,'template.pdf')
  }
}
