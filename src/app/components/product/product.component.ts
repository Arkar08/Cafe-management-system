import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateProductComponent } from '../create-product/create-product.component';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/service/product.service';
import { CategoryService } from 'src/app/service/category.service';
export interface category{
  name:string,
  category:string,
  description:string,
  price:number
}



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  category:any[]=[];
  products: any[] = [];
  result:any;
  constructor(private dialog:MatDialog, private productService:ProductService , private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getProduct();
    this.getCategory();
  }
  displayedColumns: string[] = ['name','category','description','price','action'];
  dataSource = new  MatTableDataSource<any>();

  add(){
    this.dialog.open(CreateProductComponent,{
      width:'800px'
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getProduct(){
    this.productService.getProduct().subscribe((res:any)=>{
      this.products = res.map((r:any)=>{
        const data = r.payload.doc.data();
        data.id = r.payload.doc.id;
        return data;
      })
    })
  }

  getCategory(){
    this.categoryService.getCategory().subscribe((res:any)=>{
      this.category = res.map((r:any)=>{
        const data = r.payload.doc.data();
        data.id = r.payload.doc.id;
        return data;
      })
    })
  }

}
