import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';
import { AdminModule } from './admin/admin.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { CategoryModule } from './category/category.module';
import { AddressModule } from './address/address.module';
import { CurrencyModule } from './currency/currency.module';
import { MailerModule } from './mailer/mailer.module';
import { NewsletterModule } from './newsletter/newsletter.module';
import { ProductModule } from './product/product.module';
import { ProductDetailsModule } from './product-details/product-details.module';
import { ProducerModule } from './producer/producer.module';
import { ReviewsModule } from './reviews/reviews.module';
import { DeliveryModule } from './delivery/delivery.module';
import { DeliveryMethodsModule } from './delivery_method/delivery-method.module';
import { ProductImagesModule } from './product-images/product-images.module';
import { ConversationModule } from './conversation/conversation.module';
import { MessagesModule } from './messages/messages.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PermissionsModule } from './permissions/permissions.module';
import { OrdersModule } from './orders/orders.module';
import { OrderItemsModule } from './order-items/order-items.module';
import { OrdersStatusModule } from './orders-status/orders-status.module';
import { RoleModule } from './role/role.module';
import { ServiceModule } from './service/service.module';
import { ObjectsModule } from './objects/objects.module';
import { RolePermissionsModule } from './role-permissions/role-permissions.module';
import { WishlistsModule } from './wishlists/wishlists.module';

@Module({
  imports: [
    UsersModule,
    EmployeesModule,
    AdminModule,
    SuppliersModule,
    CategoryModule,
    AddressModule,
    CurrencyModule,
    MailerModule,
    NewsletterModule,
    ProductModule,
    ProductDetailsModule,
    ProducerModule,
    ReviewsModule,
    DeliveryModule,
    DeliveryMethodsModule,
    OrdersModule,
    ProductImagesModule,
    ConversationModule,
    MessagesModule,
    NotificationsModule,
    PermissionsModule,
    NotificationsModule,
    OrderItemsModule,
    OrdersStatusModule,
    RoleModule,
    ServiceModule,
    ObjectsModule,
    RolePermissionsModule,
    WishlistsModule
  ]
})
export class DomainModule {}
