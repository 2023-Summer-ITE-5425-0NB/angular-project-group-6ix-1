import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

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

  // handle add product form submission
  onSubmit(value: any) {
    alert(`id: ${value.id}
      \nname: ${value.name}
      \ntype: CAD $${value.type}
      \nshortDesc: ${value.shortDesc}
      \nlongDesc: ${value.longDesc}
      \nimage: ${value.image}
      \nprice: ${value.price}
      \nstock: ${value.stock}`);
  }

  ngOnInit(): void {

    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      console.log('Received products:', data);
    });
  }
}
