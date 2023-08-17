import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products: Product[] = [];

  constructor(private _http: HttpClient, private productService: ProductsService) {}

  // generate css class name for the size of different product type
  getSizeStyle(productType: string): string {
    return productType.toLowerCase() + '-size';
  }
  
  // get correct image path worked for angular part
  getImagePath(productImage: string): string {
    return "../.."+productImage.substring(3);
  }

  decreaseQuantity(product: Product) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  increaseQuantity(product: Product) {
    product.quantity++;
  }

  // Calculate subtotal for a product
  calculateSubtotal(product: Product): number {
    return product.price * product.quantity;
  }

  ngOnInit(): void {
    this.productService.getProductsInCart().subscribe((data) => {
      this.products = data;
      console.log('Received products:', data);
    });
  }
}
