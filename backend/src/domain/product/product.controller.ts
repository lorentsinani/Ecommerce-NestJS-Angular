import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { UpdateProductDto } from '../../common/dtos/product/update-product.dto';
import { ProductService } from './product.service';
import { CreateProductDto } from '../../common/dtos/product/create-product.dto';
import { QueryExceptionFilter } from '../../common/filters/query.exception.filter';
import { Product } from '../entities/product.entity';

@Controller('product')
@UsePipes(new ValidationPipe())
@UseFilters(new QueryExceptionFilter('Product'))
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productService.findById(id);
  }

  @Get('/categories/max-product-count')
  async getMaxProductCountPerCategory(@Query('category_id', ParseIntPipe) category_id: number): Promise<number> {
    return this.productService.countProductsByCategory(category_id);
  }

  @Patch(':id')
  @UsePipes(new NullDtoValidationPipe())
  async update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto): Promise<Product> {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<Product> {
    return this.productService.delete(id);
  }
}
