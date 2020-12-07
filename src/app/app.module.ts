import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './screens/client/home/home.component';
import { CategoryComponent } from './screens/client/category/category.component';
import { ProductComponent } from './screens/client/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    HomeComponent,
    CategoryComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
