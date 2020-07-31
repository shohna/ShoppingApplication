import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductService } from './services/product.service';
import { ProductInfoComponent } from './product-info/product-info.component';
import { CategoryService } from './services/category.service';
import { SellerService } from './services/sellers.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    CartComponent,
    ProductInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [ProductService, CategoryService, SellerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
