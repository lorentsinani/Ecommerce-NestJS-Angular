import { Module } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { SuppliersController } from './suppliers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Suppliers } from '../entities/suppliers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Suppliers])],
  providers: [SuppliersService],
  controllers: [SuppliersController]
})
export class SuppliersModule {}
