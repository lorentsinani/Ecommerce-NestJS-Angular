import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { ProductDetailsService } from './product-details.service';
import { CreateProductDetailsDto } from '../../common/dtos/product-details/create-product-details.dto';
import { UpdateProductDetailsDto } from '../../common/dtos/product-details/update-product-details.dto';

import { QueryExceptionFilter } from '../../common/filters/query.exception.filter';
import { ProductDetails } from '../entities/product-details.entity';

@Controller('product-details')
@UsePipes(new ValidationPipe())
@UseFilters(new QueryExceptionFilter('Product Details'))
export class ProductDetailsController {
  constructor(private productDetailsService: ProductDetailsService) {}

  @Post()
  create(@Body() createProductDetailsDto: CreateProductDetailsDto): Promise<ProductDetails> {
    return this.productDetailsService.create(createProductDetailsDto);
  }

  @Get()
  findAll(): Promise<ProductDetails[]> {
    return this.productDetailsService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Promise<ProductDetails> {
    return this.productDetailsService.findById(id);
  }

  @Patch(':id')
  @UsePipes(new NullDtoValidationPipe())
  update(@Param('id') id: number, @Body() updateProductDetailsDto: UpdateProductDetailsDto): Promise<ProductDetails> {
    return this.productDetailsService.update(id, updateProductDetailsDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<ProductDetails> {
    return this.productDetailsService.delete(id);
  }
}
