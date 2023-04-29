import { CurrencyRoutes } from './admin-panel/admin-dashboard/currency/currency.route';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminCategoryRoute } from './admin-panel/admin-dashboard/admin-category/admin-category.route';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminPanelComponent,
    children: [AdminCategoryRoute, ...CurrencyRoutes]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
