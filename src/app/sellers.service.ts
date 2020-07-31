import { Seller } from './sellers.model';
import { Injectable } from '@angular/core';

@Injectable()
export class SellerService {
  seller1: Seller;
  seller2: Seller;
  seller3: Seller;

  sellers = [];

  constructor() {
    this.seller1 = new Seller(1, 'Sanjeev Stores', 'Yogi Nagar');
    this.seller2 = new Seller(2, 'Mahakali', 'Babhai Naka');
    this.seller3 = new Seller(3, 'Variety Stores', 'IC Colony');
    this.sellers.push(this.seller1);
    this.sellers.push(this.seller2);
    this.sellers.push(this.seller3);
  }

  getSellers(): Seller[] {
    return this.sellers;
  }
}
