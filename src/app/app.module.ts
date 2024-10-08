import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/single-layout/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SingleLayoutComponent } from './layout/single-layout/single-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './layout/material/material.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SidebarComponent } from './layout/single-layout/sidebar/sidebar.component';
import { CategoryComponent } from './components/category/category.component';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';
import { BillComponent } from './components/bill/bill.component';
import { UsersComponent } from './components/users/users.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service';
import { environment } from 'src/environments/environment.prod';
import {AngularFireModule} from '@angular/fire/compat'
import { UserService } from './service/user.service';
import { CategoryService } from './service/category.service';
import { ProductService } from './service/product.service';
import { Select2Module } from 'ng-select2-component';
import { BillService } from './service/bill.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SingleLayoutComponent,
    LoginComponent,
    SignupComponent,
    SidebarComponent,
    CategoryComponent,
    OrderComponent,
    ProductComponent,
    BillComponent,
    UsersComponent,
    ChangePasswordComponent,
    CreateCategoryComponent,
    CreateProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    Select2Module,
  ],
  providers: [AuthService,UserService,CategoryService,ProductService,BillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
