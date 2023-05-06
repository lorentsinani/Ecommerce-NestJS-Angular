import { CurrencyRoutes } from './admin-panel/admin-dashboard/currency/currency.route';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminCategoryRoute } from './admin-panel/admin-dashboard/admin-category/admin-category.route';
import { AdminCurrencyComponent } from './admin-panel/admin-dashboard/admin-currency/admin-currency.component';
import { AdminProducerFormComponent } from './admin-panel/admin-dashboard/admin-producer/admin-producer-form/admin-producer-form.component';
import { AdminProducerTableComponent } from './admin-panel/admin-dashboard/admin-producer/admin-producer-table/admin-producer-table.component';
import { AdminProducerComponent } from './admin-panel/admin-dashboard/admin-producer/admin-producer.component';
import { AdminSuppliersComponent } from './admin-panel/admin-dashboard/admin-suppliers/admin-suppliers.component';
import { AdminSuppliersFormComponent } from './admin-panel/admin-dashboard/admin-suppliers/admin-suppliers-form/admin-suppliers-form.component';
import { AdminSuppliersTableComponent } from './admin-panel/admin-dashboard/admin-suppliers/admin-suppliers-table/admin-suppliers-table.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminPanelComponent,
    // canActivate: [AdminGuard]
    children: [
      {
        path: 'admin-currency',
        component: AdminCurrencyComponent,

        children: []
      },
      {
        path: 'admin-producer',
        component: AdminProducerComponent,

        children: [
          {
            path: 'form',
            component: AdminProducerFormComponent
          },
          {
            path: 'table',
            component: AdminProducerTableComponent
          }
        ]
      },
      {
        path: 'admin-supplier',
        component: AdminSuppliersComponent,

        children: [
          {
            path: 'form',
            component: AdminSuppliersFormComponent
          },
          {
            path: 'table',
            component: AdminSuppliersTableComponent
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
