// import { TableComponent } from './table/table.component';
import { Route } from '@angular/router';
import { AdminProductComponent } from './admin-product.component'
import { ProductsDetailsComponent } from './product-details/product-details.component';
// import { CurrencyComponent } from './currency.component';
// import { UpdateFormComponent } from './update-form/update-form.component';

export const AdminProductRoute: Route = {
  path: 'products',
  component: AdminProductComponent,
  children: [
  //   {
  //     path: '',
  //     component: TableComponent
  //   },
    {
      path: 'create',
      component: ProductsDetailsComponent
    },
    // {
    //   path: 'update/:id',
    //   component: UpdateFormComponent
    // }
  ]
};
