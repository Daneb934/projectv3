import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../Product';
import { ProductService} from '../product.service';
import {UserServiceService} from "../user-service.service";

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  @Input() product: Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductService,
    private location: Location,
    private userServiceService: UserServiceService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct(id)
      .subscribe(product => this.product = product);
  }
  buyProduct() {

  }
  addToFav() {
    if (this.userServiceService.addToFav(this.product.id)) {
      window.alert('Added to Favourites ' + this.product.name);
    }
  }
  addComment() {
    const user = (document.getElementById('userName') as HTMLInputElement).value;
    const body = (document.getElementById('bodyCom') as HTMLTextAreaElement).value;
    this.product.comments.push({userName: user, body});
    this.productsService.updateProduct(this.product).then(
      product => this.product === product
    );
    (document.getElementById('bodyCom') as HTMLTextAreaElement).value = '';
    (document.getElementById('userName') as HTMLInputElement).value = '';
  }
}
