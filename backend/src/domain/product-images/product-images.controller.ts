import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductImagesService } from './product-images.service';
import { CreateProductImageDto } from '../../common/dtos/product-images/create-product-images.dto';
import { UpdateProductImageDto } from '../../common/dtos/product-images/update-product-images.dto';
import { QueryExceptionFilter } from '../../common/filters/query.exception.filter';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { ProductImages } from '../entities/product-images.entity';

@Controller('product-images')
@UsePipes(new ValidationPipe())
@UseFilters(new QueryExceptionFilter('Product Images'))
export class ProductImagesController {
  constructor(private productImagesService: ProductImagesService) {}

  @Post()
  create(@Body() createPrudctImageDto: CreateProductImageDto): Promise<ProductImages> {
    return this.productImagesService.create(createPrudctImageDto);
  }

  @Get()
  findAll(): Promise<ProductImages[]> {
    return this.productImagesService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Promise<ProductImages> {
    return this.productImagesService.findById(id);
  }

  @Get()
  findByUrl(@Query('url') url: string): Promise<ProductImages> {
    return this.productImagesService.findByUrl(url);
  }

  @Patch(':id')
  @UsePipes(new NullDtoValidationPipe())
  update(@Param('id', ParseIntPipe) id: number, @Body() updateProductImageDto: UpdateProductImageDto): Promise<ProductImages> {
    return this.productImagesService.update(id, updateProductImageDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<ProductImages> {
    return this.productImagesService.delete(id);
  }
}
