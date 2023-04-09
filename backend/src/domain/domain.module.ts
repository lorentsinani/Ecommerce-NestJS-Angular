import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';
import { AdminModule } from './admin/admin.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { CategoryModule } from './category/category.module';
import { AddressModule } from './address/address.module';
import { CurrencyModule } from './currency/currency.module';

@Module({
  imports: [UsersModule, EmployeesModule, AdminModule, SuppliersModule, CategoryModule, AddressModule, CurrencyModule]
})
export class DomainModule {}
