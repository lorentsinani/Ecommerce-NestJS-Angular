import { AdminCategoryFormComponent } from './admin-category-form/admin-category-form.component';
import { AdminCategoryTableComponent } from './admin-category-table/admin-category-table.component';
import { AdminCategoryComponent } from './admin-category.component';
import { Route } from '@angular/router';

export const AdminCategoryRoute: Route = {
  path: 'admin-category',
  component: AdminCategoryComponent,

  children: [
    {
      path: 'form',
      component: AdminCategoryFormComponent
    },
    {
      path: '',
      component: AdminCategoryTableComponent
    }
  ]
};
