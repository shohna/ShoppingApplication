import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { CategoryService } from '../services/category.service';
import { SellerService } from '../services/sellers.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products = [];
  categories = [];
  sellers = [];
  constructor(
    public productService: ProductService,
    public categoryService: CategoryService,
    public sellerService: SellerService,
    config: NgbCarouselConfig
  ) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    this.products = productService.getProducts();
    this.categories = categoryService.getCategories();
    this.sellers = sellerService.getSellers();
  }

  ngOnInit(): void {}

  addToCart(product: Product) {
    this.productService.addProductToCart(product);
  }
}
