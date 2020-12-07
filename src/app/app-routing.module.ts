import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { CategoryComponent } from './screens/client/category/category.component';
import { HomeComponent } from './screens/client/home/home.component';
import { ProductComponent } from './screens/client/product/product.component';

const routes: Routes = [
  {
    path: '', component: ClientLayoutComponent,
    children: [
      {
        path: '', component: HomeComponent
      },
      {
        path: 'danh-muc/:id', component: CategoryComponent
      },
      {
        path: 'san-pham/:id', component: ProductComponent
      }
    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
