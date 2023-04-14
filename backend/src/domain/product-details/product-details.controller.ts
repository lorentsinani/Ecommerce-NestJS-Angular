import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { DuplicateKeyExceptionFilter } from '../../common/filters/duplicate-key-exception.filter';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { ProductDetailsService } from './product-details.service';
import { CreateProductDetailsDto } from '../../common/dtos/product-details/create-product-details.dto';
import { UpdateProductDetailsDto } from '../../common/dtos/product-details/update-product-details.dto';

@Controller('product-details')
@UsePipes(new ValidationPipe())
export class ProductDetailsController {
  constructor(private productDetailsService: ProductDetailsService) {}

  @Post()
  @UseFilters(new DuplicateKeyExceptionFilter('Product Details'))
  async create(@Body() createProductDetailsDto: CreateProductDetailsDto) {
    return this.productDetailsService.create(createProductDetailsDto);
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    return this.productDetailsService.findById(id);
  }

  @Get()
  async findAll() {
    return this.productDetailsService.findAll();
  }

  @Patch(':id')
  @UseFilters(new DuplicateKeyExceptionFilter('Product Details'))
  @UsePipes(new NullDtoValidationPipe())
  async update(@Param('id') id: number, @Body() updateProductDetailsDto: UpdateProductDetailsDto) {
    return this.productDetailsService.update(id, updateProductDetailsDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.productDetailsService.delete(id);
  }
}
