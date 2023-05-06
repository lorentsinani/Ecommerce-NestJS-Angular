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
    AdminSuppliersTableComponent
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule]
})
export class AdminModule {}
