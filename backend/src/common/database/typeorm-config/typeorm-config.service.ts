import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Admin } from '../../../domain/entities/admin.entity';
import { User } from '../../../domain/entities/user.entity';
import { IDatabaseConfig } from '../../../config/database-config';
import { Employee } from '../../../domain/entities/employee.entity';
import { Suppliers } from '../../../domain/entities/suppliers.entity';
import { Address } from '../../../domain/entities/address.entity';
import { Category } from '../../../domain/entities/category.entity';
import { Currency } from '../../../domain/entities/currency.entity';
import { Producer } from '../../../domain/entities/producer.entity';
import { Newsletter } from '../../../domain/entities/newsletter.entity';
import { Product } from '../../../domain/entities/product.entity';
import { ProductDetails } from '../../../domain/entities/product-details.entity';
import { Delivery } from '../../../domain/entities/delivery.entity';
import { Order } from '../../../domain/entities/orders.entity';
import { DeliveryMethod } from '../../../domain/entities/delivery-method.entity';
import { Conversation } from '../../../domain/entities/conversation.entity';
import { Message } from '../../../domain/entities/message.entity';
import { Notifications } from '../../../domain/entities/notifications.entity';
import { Role } from '../../../domain/entities/role.entity';
import { RolePermissions } from '../../../domain/entities/role-permissions.entity';
import { Permission } from '../../../domain/entities/permission.entity';
import { Objects } from '../../../domain/entities/objects.entity';
import { ProductImages } from '../../../domain/entities/product-images.entity';
import { OrderItems } from '../../../domain/entities/order-items.entity';
import { OrdersStatus } from '../../../domain/entities/orders-status.entity';

@Injectable()
export class TypeormConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const databaseConfig = this.configService.get('database') as IDatabaseConfig;

    return {
      type: databaseConfig.type,
      host: databaseConfig.host,
      port: databaseConfig.port,
      username: databaseConfig.username,
      password: databaseConfig.password,
      database: databaseConfig.database,
      entities: [
        Admin,
        User,
        Employee,
        Suppliers,
        Address,
        Category,
        Currency,
        Producer,
        Newsletter,
        Product,
        ProductDetails,
        Delivery,
        DeliveryMethod,
        Orders,
        Conversation,
        Message,
        Notifications,
        Role,
        RolePermissions,
        Permission,
        Objects,
        Notifications
        ProductImages,
        Delivery,
        DeliveryMethod,
        Order,
        OrderItems,
        OrdersStatus
      ], // All the entities that you create should be added here
      synchronize: true
    } as TypeOrmModuleOptions;
  }
}
