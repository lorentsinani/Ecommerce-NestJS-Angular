import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProductDetailsRepository } from './product-details.repository';
import { CreateProductDetailsDto } from '../../common/dtos/product-details/create-product-details.dto';
import { UpdateProductDetailsDto } from '../../common/dtos/product-details/update-product-details.dto';
import { InsertResult } from 'typeorm';
import { ProductDetails } from '../entities/product-details.entity';

@Injectable()
export class ProductDetailsService {
  private NotCreatedExceptionMessage = 'Product Details is not created';
  private NotFoundExceptionMessage = 'Product Details is not found';

  constructor(private readonly productDetailsRepository: ProductDetailsRepository) {}

  async create(createProductDetailsDto: CreateProductDetailsDto): Promise<ProductDetails> {
    const createdProductDetails = await this.productDetailsRepository.createProductDetails(createProductDetailsDto);

    if (!this.getIdentifierId(createdProductDetails)) {
      throw new HttpException(this.NotCreatedExceptionMessage, HttpStatus.BAD_REQUEST);
    }
    return createdProductDetails.raw[0];
  }

  findAll(): Promise<ProductDetails[]> {
    return this.productDetailsRepository.findAllProductDetails();
  }

  async findById(id: number): Promise<ProductDetails> {
    const productDetailsExist = await this.productDetailsRepository.findProductDetailsById(id);

    if (!productDetailsExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }
    return productDetailsExist;
  }

  async update(id: number, updateProductDetailsDto: UpdateProductDetailsDto): Promise<ProductDetails> {
    const updatedProductDetails = await this.productDetailsRepository.updateProductDetails(id, updateProductDetailsDto);

    if (!updatedProductDetails.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }
    return updatedProductDetails.raw[0];
  }

  async delete(id: number): Promise<ProductDetails> {
    const deletedProductDetails = await this.productDetailsRepository.deleteProductDetails(id);

    if (!deletedProductDetails.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedProductDetails.raw[0];
  }

  getIdentifierId(result: InsertResult) {
    return result.identifiers[0].id == -1 ? false : true;
  }
}
