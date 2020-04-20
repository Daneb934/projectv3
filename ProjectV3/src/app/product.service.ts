import { Injectable } from '@angular/core';
import { Product} from './Product';
import {Category} from './Category';
import { Observable, of } from 'rxjs';
// import { products } from './Products';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserServiceService} from './user-service.service';
import {catchError, map, tap} from 'rxjs/operators';
import {User} from './User';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products';
  private usersUrl = 'api/users';
  private categoriesUrl = 'api/categories';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,
  ) { }
  getProducts(): Observable<Product[]> {
    console.log('fetched Products');
    return this.http.get<Product[]>(this.productsUrl);
  }
  getCategories(): Observable<Category[]> {
    console.log('fetched Categories');
    return this.http.get<Category[]>(this.categoriesUrl);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
  getCategoryProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
  getProduct(id: number): Observable<Product> {
    console.log('Fetched Product');
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url);
  }
  updateProduct(product: Product): Promise<Product> {
    return this.http.put(this.productsUrl + product.id, product, this.httpOptions)
      .toPromise()
      .then(resp => resp as Product);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
  searchProducts(term: string): Observable<Product[]> {
    if (!term.trim()) {
      // if not search term, return empty product array.
      return of([]);
    }
    return this.http.get<Product[]>(`${this.productsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        console.log(`found product matching "${term}"`) :
        console.log(`no product matching "${term}"`)),
    );
  }
}
