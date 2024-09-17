import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import * as FileSaver from 'file-saver'
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { UserService } from 'src/app/service/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { BillService } from 'src/app/service/bill.service';

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
  users:any[]=[];
  filter:any;
  filterCategory:any;
  totalAmount:number = 0;
  choice:boolean = true;
  dataTable:any[]=[];
  dataSource:any;
  active:boolean = true;
  paymentType:any;
  result: any;

  constructor(private categoryService:CategoryService,private productService:ProductService , private userService:UserService ,private bill:BillService) { }
 

  ngOnInit(): void {
    this.getCategory();
    this.getProduct();
    this.getUser();
  }

onChange(data:any){
  this.users.filter((user:any)=>{
    if(user.name === data){
      this.filter = user;
      this.choice = false
    }
  })
}
onCategoryChange(data:any){
  this.products.filter((product:any)=>{
    if(product.name === data){
      this.filterCategory = {...product,qty:1};
      this.total = this.filterCategory.qty * this.filterCategory.price;
      this.choice = false;
    }
  })
  this.active = false;
}

 total:number = 1;
change(data:any){
  const qty  = Number(data.target.value);
  this.filterCategory = {...this.filterCategory,qty:qty}
  this.total = qty * this.filterCategory.price;
}
select(data:any){
  this.paymentType = data.value;
}

add(){
  this.filterCategory = {...this.filterCategory,totalAmount:this.total}
  console.log(this.totalAmount)
  const array = this.dataTable.map(i => i.id)
  if(array.includes(this.filterCategory.id)){
    const final = this.dataTable.map( item => {
        if(item.id === this.filterCategory.id){
          item.qty = item.qty + this.filterCategory.qty;
          item.totalAmount = item.qty * item.price;
          return item
        }else{
          return item
        }
    })
    this.dataTable = [...final]
  }else{
    this.dataTable.push(this.filterCategory)
  }
  this.totalAmount = this.dataTable.reduce((acc,item)=>{
    return acc + item.totalAmount
  },0)
  this.dataSource = new MatTableDataSource (this.dataTable)
}

delete(data:any){
  this.dataTable = this.dataTable.filter((d:any)=>{
    return d.id != data.id;
  })
  this.dataSource = new MatTableDataSource (this.dataTable)
}
  displayedColumns: string[] = ['name','category','price','quantity','total','delete'];

  getBill(){
    const customerDetail = {...this.filter,paymentType:this.paymentType}
    const showBill = {
      customerName:customerDetail,
      productName:this.dataTable,
      totalAmount:this.totalAmount
    }
    this.bill.addBill(showBill);
    const doc = new jsPDF();
    const content = `Name: ${showBill.customerName.name}\n\n Email:${showBill.customerName.email}`;
    doc.text(content,10,10)
    const pdf = doc.output('blob');
    FileSaver.saveAs(pdf,'template.pdf')
  }

    getCategory(){
    this.categoryService.getCategory().subscribe((res:any)=>{
      this.categories = res.map((r:any)=>{
        const data = r.payload.doc.data();
        data.id = r.payload.doc.id;
        return data;
      })
    })
  }
  getProduct(){
    this.productService.getProduct().subscribe((res:any)=>{
      this.products = res.map((r:any)=>{
        const data = r.payload.doc.data();
        data.id = r.payload.doc.id;
        return data;
      })
      this.products.map((p:any)=>{
        this.categories.filter((c:any)=>{
          if(p.category === c.id){
              p.category = c.name
          }
        })
      })
    })


  }

  getUser(){
    this.userService.getUser().subscribe((res:any)=>{
      this.users = res.map((r:any)=>{
        const data = r.payload.doc.data();
        data.id = r.payload.doc.id;
        return data;
      })
    })
  }


}
