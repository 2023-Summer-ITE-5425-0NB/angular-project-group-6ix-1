import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewProduct } from '../models/new-product';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  products: Product[] = [];

  product: Product = {
    _id: '',
    name: '',
    type: '',
    shortDesc: '',
    longDesc: '',
    image: '',
    price: 0,
    stock: 0,
    inCart: false,
    quantity: 0
  };

  newProduct: NewProduct = {
    name: '',
    type: '',
    shortDesc: '',
    longDesc: '',
    image: '',
    price: 0,
    stock: 0,
    inCart: false,
    quantity: 0
  }
  constructor(private _http: HttpClient, private productService: ProductsService) {}

  // generate css class name for the size of different product type
  getSizeStyle(productType: string): string {
    return productType.toLowerCase() + '-size';
  }
  
  // get correct image path worked for angular part
  getImagePath(productImage: string): string {
    return "../.."+productImage.substring(3);
  }

  // handle add/modify product form submission
  onSubmit(value: any) {

    if (!value._id) {
      // add product
      this.newProduct = {
        name: value.name,
        type: value.type,
        shortDesc: value.shortDesc,
        longDesc: value.longDesc,
        image: value.image,
        price: value.price,
        stock: value.stock,
        inCart: false,
        quantity: 0
      }

      this.productService.addProduct(this.newProduct).subscribe(
        response => {
          if (response && response.status === 201) {
            console.log('Add product successfully.');
          } else {
            console.error('Error adding product:', response);
          }
        }
      );
    } else {
      // modify product
      this.product = {
        _id: value._id,
        name: value.name,
        type: value.type,
        shortDesc: value.shortDesc,
        longDesc: value.longDesc,
        image: value.image,
        price: value.price,
        stock: value.stock,
        inCart: false,
        quantity: 0
      }

      this.productService.modifyProduct(this.product).subscribe(
        response => {
          console.log('Product added!', response);
        }
      );
    }
    // refresh page
    window.location.reload();
  }

  // handle delete product
  onDeleteProduct(productId: string) {
    this.productService.deleteProduct(productId).subscribe(
      response => {
        if (response && response.status === 200) {
          console.log('Delete product successfully.');
        } else {
          console.error('Error adding product:', response);
        }
      }
    );
    // refresh page
    window.location.reload();
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      console.log('Received products:', data);
    });
  }
}
