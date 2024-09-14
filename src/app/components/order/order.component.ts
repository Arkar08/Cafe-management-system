import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import * as FileSaver from 'file-saver'
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';




@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit{
  pdfSrc:any;
  data = {
    name:'Arkar',
    email:'arkar@gmail.com'
  }
  categories:any[]=[];
  products:any[]=[];

  constructor(private categoryService:CategoryService,private productService:ProductService) { }
 

  ngOnInit(): void {
    this.getCategory();
    this.getProduct();
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

  // getUser(){
  //   this.userService.getUser().subscribe((res:any)=>{
  //     this.users = res.map((r:any)=>{
  //       const data = r.payload.doc.data();
  //       console.log(data)
  //       data.id = r.payload.doc.id;
  //       return data;
  //     })
  //   })
  // }

    getCategory(){
    this.categoryService.getCategory().subscribe((res:any)=>{
      this.categories = res.map((r:any)=>{
        const data = r.payload.doc.data();
        console.log(data)
        data.id = r.payload.doc.id;
        return data;
      })
    })
  }
  getProduct(){
    this.productService.getProduct().subscribe((res:any)=>{
      this.products = res.map((r:any)=>{
        const data = r.payload.doc.data();
        console.log(data)
        data.id = r.payload.doc.id;
        return data;
      })
    })
  }

}
