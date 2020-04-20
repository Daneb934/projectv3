import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../Product';

@Component({
  selector: 'app-for-man-categories',
  templateUrl: './for-man-categories.component.html',
  styleUrls: ['./for-man-categories.component.css']
})
export class ForManCategoriesComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductService ) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(): void {
    this.productsService.getProducts()
      .subscribe(products => this.products = products.filter(product => product.gender === 1));
  }
}
