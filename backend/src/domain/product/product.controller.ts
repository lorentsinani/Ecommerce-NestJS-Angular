import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { UpdateProductDto } from '../../common/dtos/product/update-product.dto';
import { ProductService } from './product.service';
import { CreateProductDto } from '../../common/dtos/product/create-product.dto';
import { QueryExceptionFilter } from '../../common/filters/query.exception.filter';
import { Product } from '../entities/product.entity';
import { NumberOfProducts } from '../../common/interfaces/number-of-products.interface';
import { ProductSearchDto } from '../../common/dtos/product/product-search.dto';
import { DynamicProductFilterDto } from 'src/common/dtos/product/dynamic-product-filter.dto';

@Controller('product')
@UsePipes(new ValidationPipe())
@UseFilters(new QueryExceptionFilter('Product'))
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get('/filter')
  async findFilteredProducts(@Query() filterDto: DynamicProductFilterDto): Promise<Product[]> {
    return this.productService.findFilteredProducts(filterDto);
  }

  @Get('/discount')
  async findProductsOnDiscount(): Promise<Product[]> {
    return this.productService.findProductsOnDiscount();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productService.findById(id);
  }

  @Get('/categories/max-product-count')
  getNumberOfProductsByCategory(@Query('category_id', ParseIntPipe) category_id: number): Promise<NumberOfProducts> {
    return this.productService.countProductsByCategory(category_id);
  }

  @Post('/search')
  search(@Body() productSearchDto: ProductSearchDto): Promise<Product[]> {
    return this.productService.search(productSearchDto.q);
  }
  @Get('new-arrivals')
  async getNewArrivalProducts(): Promise<Product[]> {
    return this.productService.getNewArrivalProducts();
  }
  @Patch(':id')
  @UsePipes(new NullDtoValidationPipe())
  update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto): Promise<Product> {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<Product> {
    return this.productService.delete(id);
  }
}
