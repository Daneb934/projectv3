import { Component, OnInit, Input } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../Product';
import {User} from "../User";
import {UserServiceService} from "../user-service.service";

@Component({
  selector: 'app-for-all-categories',
  templateUrl: './for-all-categories.component.html',
  styleUrls: ['./for-all-categories.component.css']
})
export class ForAllCategoriesComponent implements OnInit {
  products: Product[] = [];
  activeUser: User;
  constructor(
    private productsService: ProductService,
    private userServiceService: UserServiceService,
    ) { }

  ngOnInit(): void {
    this.getProducts();
    this.userServiceService.getLoggedStatus().subscribe(user => this.activeUser = user);
  }
  getProducts(): void {
     this.productsService.getProducts()
       .subscribe(products => this.products = products.slice(0, 12));
  }
}
