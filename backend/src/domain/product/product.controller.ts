import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { DuplicateKeyExceptionFilter } from '../../common/filters/duplicate-key-exception.filter';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { UpdateProductDto } from '../../common/dtos/product/update-product.dto';
import { ProductService } from './product.service';
import { CreateProductDto } from '../../common/dtos/product/create-product.dto';

@Controller('product')
@UsePipes(new ValidationPipe())
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  @UseFilters(new DuplicateKeyExceptionFilter('Product'))
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findById(id);
  }

  @Get()
  async findAll() {
    return this.productService.findAll();
  }

  @Patch(':id')
  @UseFilters(new DuplicateKeyExceptionFilter('product'))
  @UsePipes(new NullDtoValidationPipe())
  async update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}
