import { Product } from './product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  product1: Product;
  product2: Product;
  product3: Product;

  products = [];
  product: Product;
  cart = [];

  constructor() {
    this.product1 = new Product(1, 'One Plus', 3000);
    this.product2 = new Product(2, 'Samsung', 2000);
    this.product3 = new Product(3, 'Nokia', 1000);
    this.products.push(this.product1);
    this.products.push(this.product2);
    this.products.push(this.product3);
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: Number): Product {
    this.product = this.products.find((product) => product.id == id);
    return this.product;
  }

  addProductToCart(product: Product) {
    if (!this.cart.includes(product)) {
      this.cart.push(product);
      alert('Product added to cart');
    }
  }

  getCart(): Product[] {
    return this.cart;
  }

  deleteFromCart(product: Product) {
    return product;
  }
}
