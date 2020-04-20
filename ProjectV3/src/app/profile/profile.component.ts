import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { User} from '../User';
import {UserServiceService} from '../user-service.service';
import { Location } from '@angular/common';
import {ProductService} from '../product.service';
import {Product} from '../Product';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  likedBtn = 'Hide Liked Things';
  ordersBtn = 'Hide My Orders';
  user: User;
  likedProducts: Product[] = [];
  orderedProducts: Product[] = [];
  showLiked = true; showOrders = true;
  constructor(
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private userService: UserServiceService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    if (!this.userService.getStatus()) {
      this.router.navigate(['/forall']);
    } else {
      this.userService.getLoggedStatus().subscribe(user => this.user = user);
      this.getProducts();
    }
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.userService.updateUser(this.user).then(() => this.goBack());
  }
  delete(prodId: number) {
    console.log(prodId);
    this.userService.removeFav(prodId);
    this.getProducts();
  }
  getProducts() {
    this.likedProducts = [];
    this.orderedProducts = [];
    for (const prod of this.user.liked) {
      this.productService.getProduct(prod)
        .subscribe(product => this.likedProducts.push(product));
    }
    for (const prod of this.user.myOrders){
      this.productService.getProduct(prod)
        .subscribe(product => this.orderedProducts.push(product));
    }
  }
  liked() {
    if (this.showLiked === false) {
      this.showLiked = true;
      this.likedBtn = 'Hide Liked Things';
    } else {
      this.showLiked = false;
      this.likedBtn = 'Show Liked Things';
    }
  }
  ordered() {
    if (this.showOrders === false) {
      this.showOrders = true;
      this.ordersBtn = 'Hide Orders';
    } else {
      this.showOrders = false;
      this.ordersBtn = 'Show Orders';
    }
  }
}
