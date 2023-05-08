import { AdminCategoryComponent } from './admin-panel/admin-dashboard/admin-category/admin-category.component';
// admin.module.ts
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
import { RolesComponent } from './admin-panel/admin-dashboard/users-access-control/roles/roles.component';
import { PermissionsComponent } from './admin-panel/admin-dashboard/users-access-control/permissions/permissions.component';
import { ObjectsComponent } from './admin-panel/admin-dashboard/users-access-control/objects/objects.component';
import { RolePermissionsComponent } from './admin-panel/admin-dashboard/users-access-control/role-permissions/role-permissions.component';
import { AddRoleComponent } from './admin-panel/admin-dashboard/users-access-control/roles/add-role/add-role.component';
import { EditRoleComponent } from './admin-panel/admin-dashboard/users-access-control/roles/edit-role/edit-role.component';
import { ListRolesComponent } from './admin-panel/admin-dashboard/users-access-control/roles/list-roles/list-roles.component';
import { ListRolesHeadComponent } from './admin-panel/admin-dashboard/users-access-control/roles/list-roles/head/head.component';
import { ListRolesRowComponent } from './admin-panel/admin-dashboard/users-access-control/roles/list-roles/row/row.component';

@NgModule({
  declarations: [
    AdminPanelComponent,
    AdminDashboardComponent,
    AdminCategoryComponent,
    AdminCategoryTableComponent,
    AdminCategoryFormComponent,
    CurrencyComponent,
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
    RolesComponent,
    PermissionsComponent,
    ObjectsComponent,
    RolePermissionsComponent,
    AddRoleComponent,
    EditRoleComponent,
    ListRolesComponent,
    ListRolesHeadComponent,
    ListRolesRowComponent
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule]
})
export class AdminModule {}
