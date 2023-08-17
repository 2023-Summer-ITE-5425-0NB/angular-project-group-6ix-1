import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url: string = 'http://localhost:6006/api/product/';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<any>(this.url).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error fetching products:', error);
        throw error;
      })
    );
  }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.url, product).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 201) {
          console.log('Product added successfully.');
          return throwError(error);
        } else {
          console.error('Error adding product:', error);
          throw error;
        }
      })
    );
  }

  modifyProduct(product: any): Observable<any> {
    const modifiedUrl = this.url + product._id;
    return this.http.put<any>(modifiedUrl, product).pipe(
      catchError(error => {
        console.error('Error modifying product:', error);
        throw error;
      })
    );
  }

  deleteProduct(productId: string): Observable<any> {
    const deleteUrl = this.url + productId;
    return this.http.delete<any>(deleteUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 200) {
          console.log('Product deleted successfully.');
          return throwError(error);
        } else {
          console.error('Error deleting product:', error);
          throw error;
        }
      })
    );
  }
}
