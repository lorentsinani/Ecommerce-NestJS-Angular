import { Module } from '@nestjs/common';
import { ProductDetailsController } from './product-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductDetails } from '../entities/product-details.entity';
import { ProductDetailsRepository } from './product-details.repository';
import { ProductDetailsService } from './product-details.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductDetails])],
  controllers: [ProductDetailsController],
  providers: [ProductDetailsService, ProductDetailsRepository]
})
export class ProductDetailsModule {}
