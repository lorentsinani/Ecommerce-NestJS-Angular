import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from '../entities/address.entity';
import { AddressRepository } from './address.repository';
import { CategoryService } from '../category/category.service';

@Module({
  imports: [TypeOrmModule.forFeature([Address])],
  providers: [AddressService, AddressRepository],
  controllers: [AddressController],
  exports: [AddressService]
})
export class AddressModule {}
