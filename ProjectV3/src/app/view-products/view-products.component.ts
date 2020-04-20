import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  products = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getCategoryProducts();
  }

  getCategoryProducts() {
    const prevCat = +this.route.snapshot.paramMap.get('prevCat'); // 1 = man, 2 = woman
    const catId = +this.route.snapshot.paramMap.get('catId'); // man or woman's category id
    console.log('Init' + catId);
    this.productService.getProducts()
      .subscribe(products =>
        this.products = products.
        // filter(product => product.for === prevCat).
        filter(product => product.category === catId));
  }
}
