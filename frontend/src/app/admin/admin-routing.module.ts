import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminCategoryComponent } from './admin-panel/admin-dashboard/admin-category/admin-category.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminPanelComponent,
    // canActivate: [AdminGuard]
    children: [
      {
        path: 'admin-category',
        component: AdminCategoryComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
