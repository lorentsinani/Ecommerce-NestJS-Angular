import { Module } from '@nestjs/common';
import { ProductImagesController } from './product-images.controller';
import { ProductImagesService } from './product-images.service';

@Module({
  controllers: [ProductImagesController],
  providers: [ProductImagesService]
})
export class ProductImagesModule {}
