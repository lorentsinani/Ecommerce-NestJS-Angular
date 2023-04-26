import { AdminOrderItemsComponent } from './admin-panel/admin-dashboard/admin-order-items/admin-order-items.component';
import { AdminProducerComponent } from './admin-panel/admin-dashboard/admin-producer/admin-producer.component';
import { AdminCategoryComponent } from './admin-panel/admin-dashboard/admin-category/admin-category.component';
// admin.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminSidebarComponent } from './admin-panel/admin-sidebar/admin-sidebar.component';
import { AdminDashboardComponent } from './admin-panel/admin-dashboard/admin-dashboard.component';
import { AdminCategoryTableComponent } from './admin-panel/admin-dashboard/admin-category/admin-category-table/admin-category-table.component';
import { AdminCurrencyComponent } from './admin-panel/admin-dashboard/admin-currency/admin-currency.component';
import { AdminAddressComponent } from './admin-panel/admin-dashboard/admin-address/admin-address.component';
import { AdminDeliveryComponent } from './admin-panel/admin-dashboard/admin-delivery/admin-delivery.component';
import { AdminDeliveryMethodComponent } from './admin-panel/admin-dashboard/admin-delivery-method/admin-delivery-method.component';
import { AdminEmployeeComponent } from './admin-panel/admin-dashboard/admin-employee/admin-employee.component';
import { AdminMessageComponent } from './admin-panel/admin-dashboard/admin-message/admin-message.component';
import { AdminOrderStatusComponent } from './admin-panel/admin-dashboard/admin-order-status/admin-order-status.component';
import { AdminOrdersComponent } from './admin-panel/admin-dashboard/admin-orders/admin-orders.component';
import { AdminNewsletterComponent } from './admin-panel/admin-dashboard/admin-newsletter/admin-newsletter.component';
import { AdminObjectsComponent } from './admin-panel/admin-dashboard/admin-objects/admin-objects.component';
import { AdminOrderComponent } from './admin-panel/admin-dashboard/admin-order/admin-order.component';
import { AdminPermissionsComponent } from './admin-panel/admin-dashboard/admin-permissions/admin-permissions.component';
import { AdminProductComponent } from './admin-panel/admin-dashboard/admin-product/admin-product.component';
import { AdminProductDetailsComponent } from './admin-panel/admin-dashboard/admin-product-details/admin-product-details.component';
import { AdminProductImagesComponent } from './admin-panel/admin-dashboard/admin-product-images/admin-product-images.component';
import { AdminUsersComponent } from './admin-panel/admin-dashboard/admin-users/admin-users.component';

@NgModule({
  declarations: [
    AdminPanelComponent,
    AdminSidebarComponent,
    AdminDashboardComponent,
    AdminCategoryComponent,
    AdminCategoryTableComponent,
    AdminCurrencyComponent,
    AdminAddressComponent,
    AdminDeliveryComponent,
    AdminDeliveryMethodComponent,
    AdminEmployeeComponent,
    AdminMessageComponent,
    AdminNewsletterComponent,
    AdminObjectsComponent,
    AdminOrderComponent,
    AdminOrdersComponent,
    AdminOrderItemsComponent,
    AdminOrderStatusComponent,
    AdminPermissionsComponent,
    AdminProducerComponent,
    AdminProductComponent,
    AdminProductDetailsComponent,
    AdminProductImagesComponent,
    AdminUsersComponent
  ],
  imports: [CommonModule, AdminRoutingModule]
})
export class AdminModule {}
