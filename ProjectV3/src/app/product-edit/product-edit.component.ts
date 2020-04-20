import {Component, Input, OnInit} from '@angular/core';
import { Product} from '../Product';
import { ProductService} from '../product.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import {UserServiceService} from "../user-service.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @Input() product: Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductService,
    private location: Location,
    private userServiceService: UserServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.userServiceService.getStatus()) {
      this.router.navigate(['/sign/in']);
    } else {
      this.getProduct();
    }
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.productsService.updateProduct(this.product).then(() => this.goBack());
  }
  edit(element: string) {
    (document.getElementById(element) as HTMLInputElement).disabled = false;
  }
}
