import { Component } from '@angular/core';
import {Category} from './Category';
import {ProductService} from './product.service';
import {ActivatedRoute} from '@angular/router';
import {User} from './User';
import {UserServiceService} from './user-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  categories = [];
  private prevCatId = -1;
  constructor(
    private productsService: ProductService,
    private route: ActivatedRoute,
    private userServiceService: UserServiceService
    ) { }
  mouseEnter(id) {
    this.mouseLeave();
    if (id === 1) {
      this.prevCatId = 1;
      this.productsService.getCategories()
        .subscribe(categories => this.categories = categories.filter(category => category.gender === 1));
    } else if (id === 2) {
      this.prevCatId = 2;
      this.productsService.getCategories()
        .subscribe(categories => this.categories = categories.filter(category => category.gender === 2));
    }
    document.querySelector('div').style.cssText = 'background-color: rgba(0,0,0,0.5);';
    document.getElementById('nav_list').style.cssText = 'background-color: rgba(0,0,0,0.5);';
  }
  mouseLeave() {
    this.categories = [];
    document.querySelector('div').style.cssText = 'background-color: none;';
    document.getElementById('nav_list').style.cssText = 'background-color: none';
  }
  // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
}
