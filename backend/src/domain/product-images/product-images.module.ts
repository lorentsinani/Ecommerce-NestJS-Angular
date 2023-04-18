import { Module } from '@nestjs/common';
import { ProductImagesController } from './product-images.controller';
import { ProductImagesService } from './product-images.service';
import { ProductImagesRepository } from './product-images.repository';
import { ProductImages } from '../entities/product-images.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
 


@Module({
  imports: [TypeOrmModule.forFeature([ProductImages])], 
  controllers: [ProductImagesController],
  providers: [ProductImagesService, ProductImagesRepository]
})
export class ProductImagesModule {}
