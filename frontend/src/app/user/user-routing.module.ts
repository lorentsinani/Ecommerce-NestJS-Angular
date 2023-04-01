import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { AboutComponent } from './about/about.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'product-details',
    component: ProductdetailsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'category',
    component: CategoryComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'product-details',
    component: ProductdetailsComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
