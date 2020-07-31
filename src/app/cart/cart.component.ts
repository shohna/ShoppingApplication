import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductsComponent } from '../products/products.component';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart = [];
  total: Number = 0;
  product: Product;
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.cart = this.productService.getCart();
    this.sum();
  }

  onDelete(product: Product) {
    this.product = this.productService.deleteFromCart(product);
    for (let i = 0; i < this.cart.length; i++) {
      let c = this.cart[i];

      if (c == product) {
        this.cart.splice(i, 1);
      }
    }
    this.total = 0;
    this.sum();
  }

  sum() {
    console.log(this.cart);
    for (let i = 0; i < this.cart.length; i++) {
      let c = this.cart[i];

      this.total += c.price;
    }
  }
}
