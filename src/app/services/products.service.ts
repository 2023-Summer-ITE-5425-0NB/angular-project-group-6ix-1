import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private urlGetProducts: string = 'http://localhost:6006/api/product/';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<any>(this.urlGetProducts).pipe(
      map(response => response.data)
    );
  }

  // addProduct(product: any): Observable<any> {
  //   return this.http.post<any>(this.url, product);
  // }
}