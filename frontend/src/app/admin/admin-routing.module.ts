import { UsersAccessControlRoute } from './admin-panel/admin-dashboard/users-access-control/users-access-control.routing';
import { CurrencyRoute } from './admin-panel/admin-dashboard/currency/currency.routing';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { DeliveryRoute } from './admin-panel/admin-dashboard/delivery/delivery.routing';
import { DeliveryMethodRoute } from './admin-panel/admin-dashboard/delivery-method/delivery-method.routing';
import { RoleGuard } from '../core/guards/role.guard';
import { ErrorComponent } from '../shared/error/error/error.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminPanelComponent,
    // canActivate: [AuthGuard],
    // data: {
    //   roles: ['admin']
    // },
    children: [CurrencyRoute, UsersAccessControlRoute, UsersRoute, DeliveryRoute, DeliveryMethodRoute]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
