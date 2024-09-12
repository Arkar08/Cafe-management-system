import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/single-layout/home/home.component';
import { SingleLayoutComponent } from './layout/single-layout/single-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoryComponent } from './components/category/category.component';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';
import { BillComponent } from './components/bill/bill.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/',
    pathMatch:'full'
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'cafe',
    component:SingleLayoutComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'category',
        component:CategoryComponent
      },
      {
        path:'order',
        component:OrderComponent
      },
      {
        path:'product',
        component:ProductComponent
      },
      {
        path:'bill',
        component:BillComponent
      },
      {
        path:'users',
        component:UsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
