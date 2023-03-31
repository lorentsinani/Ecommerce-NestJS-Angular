import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    CartComponent,
    AccountComponent,
    BlogComponent,
    ContactComponent,
    HomeComponent,
    ProductComponent,
    AboutComponent,
    CategoryComponent,
  ],
  imports: [CommonModule],
})
export class UserModule {}
