import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDto } from '../../common/dtos/product/create-product.dto';
import { UpdateProductDto } from '../../common/dtos/product/update-product.dto';
import { Product } from '../entities/product.entity';
import { InsertResult } from 'typeorm';
import { NumberOfProducts } from '../../common/interfaces/number-of-products.interface';
import { DateUtil } from '../../common/utils/date-util';
import { DynamicProductFilterDto } from 'src/common/dtos/product/dynamic-product-filter.dto';

@Injectable()
export class ProductService {
  private NotCreatedExceptionMessage = 'Product is not created';
  private NotFoundExceptionMessage = 'Product is not found';

  constructor(private readonly productRepository: ProductRepository) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = await this.productRepository.createProduct(createProductDto);

    if (!this.getIdentifierId(createdProduct)) {
      throw new HttpException(this.NotCreatedExceptionMessage, HttpStatus.BAD_REQUEST);
    }

    return createdProduct.raw[0];
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.findAllProducts();
  }

  async findById(id: number): Promise<Product> {
    const productExist = await this.productRepository.findProductById(id);

    if (!productExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }
    return productExist;
  }

  async countProductsByCategory(category_id: number): Promise<NumberOfProducts> {
    const numberOfProducts = await this.productRepository.countProductsByCategory(category_id);

    return numberOfProducts[0];
  }

  async search(searchTerm: string): Promise<Product[]> {
    const productFound = this.productRepository.searchProduct(searchTerm);

    if (!productFound) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return productFound;
  }

  async getNewArrivalProducts() {
    const oneWeekAgoTimestamp = DateUtil.getOneWeekAgoTimestamp();
    return this.productRepository.getNewArrivalProducts(oneWeekAgoTimestamp);
  }
  
  findFilteredProducts(filterDto: DynamicProductFilterDto): Promise<Product[]> {
    return this.productRepository.findProductsFilter(filterDto);
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    const updatedProduct = await this.productRepository.updateProduct(id, updateProductDto);

    if (!updatedProduct.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return updatedProduct.raw[0];
  }

  async delete(id: number): Promise<Product> {
    const deletedProduct = await this.productRepository.deleteProduct(id);

    if (!deletedProduct.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedProduct.raw[0];
  }

  getIdentifierId(result: InsertResult) {
    return result.identifiers[0].id == -1 ? false : true;
  }

  async findProductsOnDiscount(): Promise<Product[]> {
    return await this.productRepository.findProductsOnDiscount();
  }
}
