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
      entities: [Admin, User, Employee, Suppliers, Address, Category, Currency, Producer, Newsletter, Product, ProductDetails], // All the entities that you create should be added here
      synchronize: true
    } as TypeOrmModuleOptions;
  }
}
