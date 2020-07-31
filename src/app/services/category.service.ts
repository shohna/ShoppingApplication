import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable()
export class CategoryService {
  cat1: Category;
  cat2: Category;
  cat3: Category;

  categories = [];
  cat: Category;

  constructor() {
    this.cat1 = new Category(1, 'Electronics', '../assets/img/cat1.png');
    this.cat2 = new Category(2, 'Clothing', '../assets/img/cat2.png');
    this.cat3 = new Category(3, 'Furniture', '../assets/img/cat3.jpg');
    this.categories.push(this.cat1);
    this.categories.push(this.cat2);
    this.categories.push(this.cat3);
  }

  getCategories(): Category[] {
    return this.categories;
  }
}
