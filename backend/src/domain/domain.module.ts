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
import { DeliveryModule } from './delivery/delivery.module';
import { DeliveryMethodsModule } from './delivery_method/delivery-method.module';
import { OrdersModule } from './orders/orders.module';
import { ProductImagesModule } from './product-images/product-images.module';

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
    DeliveryModule,
    DeliveryMethodsModule,
    OrdersModule,
    ProductImagesModule
  ]
})
export class DomainModule {}
