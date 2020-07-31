import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent implements OnInit {
  id: Number;
  product: Product;

  constructor(actRoute: ActivatedRoute, public productService: ProductService) {
    this.id = actRoute.snapshot.params.id;
    this.product = productService.getProduct(this.id);
    console.log(this.product);
  }

  ngOnInit(): void {}
}
