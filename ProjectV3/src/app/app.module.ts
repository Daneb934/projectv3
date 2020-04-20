import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { ForAllCategoriesComponent } from './for-all-categories/for-all-categories.component';
import { ForManCategoriesComponent } from './for-man-categories/for-man-categories.component';
import { ForWomanCategoriesComponent } from './for-woman-categories/for-woman-categories.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { SignComponent } from './sign/sign.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService} from './product.service';
import { InMemoryDataService} from './in-memory-data.service';
import {FormsModule} from '@angular/forms';
import { BottomNavigationComponent } from './bottom-navigation/bottom-navigation.component';
import { AdviceMenuComponent } from './advice-menu/advice-menu.component';
import { LoggedStatusComponent } from './logged-status/logged-status.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

@NgModule(
  {
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      // HttpClientInMemoryWebApiModule.forRoot(
      //   InMemoryDataService, {dataEncapsulation: false}
      // ),
      FormsModule
    ],
    declarations: [
      AppComponent,
      ForAllCategoriesComponent,
      ForManCategoriesComponent,
      ForWomanCategoriesComponent,
      ViewProductComponent,
      ViewProductsComponent,
      SignComponent,
      BottomNavigationComponent,
      AdviceMenuComponent,
      LoggedStatusComponent,
      ProfileComponent,
      ProductEditComponent,
      AdminPageComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
