import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {ForAllCategoriesComponent} from './for-all-categories/for-all-categories.component';
import {ForManCategoriesComponent} from './for-man-categories/for-man-categories.component';
import {ForWomanCategoriesComponent} from './for-woman-categories/for-woman-categories.component';
import {ViewProductsComponent} from './view-products/view-products.component';
import {ViewProductComponent} from './view-product/view-product.component';
import {SignComponent} from './sign/sign.component';
import {ProfileComponent} from './profile/profile.component';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {ProductEditComponent} from './product-edit/product-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'forall', pathMatch: 'full' },
  { path: 'products/:id', component: ViewProductComponent},
  { path: 'forall', component: ForAllCategoriesComponent },
  { path: 'forman', component: ForManCategoriesComponent },
  { path: 'forwoman', component: ForWomanCategoriesComponent },
  { path: 'category/:catId/products' , component: ViewProductsComponent},
  { path: 'sign/:action', component: SignComponent},
  { path: 'profile', component: ProfileComponent},
  {path: 'admin', component: AdminPageComponent},
  {path: 'admin/productEdit/:id', component: ProductEditComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
