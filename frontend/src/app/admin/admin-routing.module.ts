import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminCategoryComponent } from './admin-panel/admin-dashboard/admin-category/admin-category.component';
import { AdminCategoryFormComponent } from './admin-panel/admin-dashboard/admin-category/admin-category-form/admin-category-form.component';
import { AdminCategoryTableComponent } from './admin-panel/admin-dashboard/admin-category/admin-category-table/admin-category-table.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminPanelComponent,
    // canActivate: [AdminGuard]
    children: [
      {
        path: 'admin-category',
        component: AdminCategoryComponent,

        children: [
          {
            path: 'form',
            component: AdminCategoryFormComponent
          },
          {
            path: 'table',
            component: AdminCategoryTableComponent
          }
        ]
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
