import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { ProductDetails } from '../entities/product-details.entity';
import { IProductDetails } from '../../common/interfaces/product-details.interface';
import { CreateProductDetailsDto } from '../../common/dtos/product-details/create-product-details.dto';
import { UpdateProductDetailsDto } from '../../common/dtos/product-details/update-product-details.dto';

@Injectable()
export class ProductDetailsRepository extends Repository<ProductDetails> {
  constructor(dataSource: DataSource) {
    super(ProductDetails, dataSource.createEntityManager());
  }

  createProductDetails(createProductDetailsDto: CreateProductDetailsDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(ProductDetails).values(createProductDetailsDto).returning('*').execute();
  }

  findProductDetailsById(id: number) {
    return this.createQueryBuilder('product_details').where('id = :id', { id }).getOne();
  }

  async findAllProductDetails(): Promise<IProductDetails[]> {
    return this.find();
  }

  async updateProductDetails(id: number, updateProductDetailsDto: UpdateProductDetailsDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(ProductDetails).set(updateProductDetailsDto).where('id = :id', { id }).returning('*').execute();
  }

  async deleteProductDetails(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(ProductDetails).where('id = :id', { id }).returning('*').execute();
  }
}
