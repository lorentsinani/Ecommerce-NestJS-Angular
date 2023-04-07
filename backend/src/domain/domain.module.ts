import { Module } from '@nestjs/common';
import { SuppliersModule } from './suppliers/suppliers.module';
import { CategoryModule } from './category/category.module';
import { AddressModule } from './address/address.module';
import { CurrencyModule } from './currency/currency.module';

@Module({
  imports: [SuppliersModule, CategoryModule, AddressModule, CurrencyModule]
})
export class DomainModule {}
