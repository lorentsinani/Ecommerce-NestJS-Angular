import { AdminCategoryComponent } from './admin-panel/admin-dashboard/admin-category/admin-category.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminDashboardComponent } from './admin-panel/admin-dashboard/admin-dashboard.component';
import { AdminCategoryTableComponent } from './admin-panel/admin-dashboard/admin-category/admin-category-table/admin-category-table.component';
import { AdminCategoryFormComponent } from './admin-panel/admin-dashboard/admin-category/admin-category-form/admin-category-form.component';
import { CurrencyComponent } from './admin-panel/admin-dashboard/currency/currency.component';
import { CreateFormComponent } from './admin-panel/admin-dashboard/currency/create-form/create-form.component';
import { UpdateFormComponent } from './admin-panel/admin-dashboard/currency/update-form/update-form.component';
import { TableComponent } from './admin-panel/admin-dashboard/currency/table/table.component';
import { HeadComponent } from './admin-panel/admin-dashboard/currency/table/head/head.component';
import { RowComponent } from './admin-panel/admin-dashboard/currency/table/row/row.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './admin-panel/sidebar/sidebar.component';
import { AdminProducerFormComponent } from './admin-panel/admin-dashboard/admin-producer/admin-producer-form/admin-producer-form.component';
import { AdminProducerTableComponent } from './admin-panel/admin-dashboard/admin-producer/admin-producer-table/admin-producer-table.component';
import { AdminSuppliersComponent } from './admin-panel/admin-dashboard/admin-suppliers/admin-suppliers.component';
import { AdminSuppliersFormComponent } from './admin-panel/admin-dashboard/admin-suppliers/admin-suppliers-form/admin-suppliers-form.component';
import { AdminSuppliersTableComponent } from './admin-panel/admin-dashboard/admin-suppliers/admin-suppliers-table/admin-suppliers-table.component';
import { UsersAccessControlComponent } from './admin-panel/admin-dashboard/users-access-control/users-access-control.component';
import { RolesDeclarations } from './admin-panel/admin-dashboard/users-access-control/roles/roles.declarations';
import { RolePermissionDeclarations } from './admin-panel/admin-dashboard/users-access-control/role-permissions/role-permissions.declarations';
import { PermissionDeclarations } from './admin-panel/admin-dashboard/users-access-control/permissions/permission.declaration';
import { ObjectsDeclarations } from './admin-panel/admin-dashboard/users-access-control/objects/objects.declarations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../core/interceptors/token.interceptor';
import { UsersComponent } from './admin-panel/users/users.component';
import { UsersDetailsComponent } from './admin-panel/users/users-details/users-details.component';
import { CreateFormDeliveryComponent } from './admin-panel/admin-dashboard/delivery/create-form-delivery/create-form-delivery.component';
import { TableDeliveryComponent } from './admin-panel/admin-dashboard/delivery/table-delivery/table-delivery.component';
import { DeliveryComponent } from './admin-panel/admin-dashboard/delivery/delivery.component';
import { DeliveryMethodComponent } from './admin-panel/admin-dashboard/delivery-method/delivery-method.component';

import { CreateFormDeliveryMethodComponent } from './admin-panel/admin-dashboard/delivery-method/create-form-delivery-method/create-form-delivery-method.component';

@NgModule({
  declarations: [
    AdminPanelComponent,
    AdminDashboardComponent,
    AdminCategoryComponent,
    AdminCategoryTableComponent,
    AdminCategoryFormComponent,
    CurrencyComponent,
    DeliveryComponent,
    CreateFormComponent,
    UpdateFormComponent,
    TableComponent,
    HeadComponent,
    RowComponent,
    SidebarComponent,
    AdminProducerFormComponent,
    AdminProducerTableComponent,
    AdminSuppliersComponent,
    AdminSuppliersFormComponent,
    AdminSuppliersTableComponent,
    UsersAccessControlComponent,
    ...RolesDeclarations,
    ...RolePermissionDeclarations,
    ...PermissionDeclarations,
    ...ObjectsDeclarations,
    UsersComponent,
    UsersDetailsComponent,
    CreateFormDeliveryComponent,
    TableDeliveryComponent,
    DeliveryMethodComponent,
    CreateFormDeliveryMethodComponent
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class AdminModule {}
