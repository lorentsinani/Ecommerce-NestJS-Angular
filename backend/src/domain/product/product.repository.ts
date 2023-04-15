import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Product } from '../entities/product.entity';
import { IProduct } from '../../common/interfaces/product.interface';
import { CreateProductDto } from '../../common/dtos/product/create-product.dto';
import { UpdateProductDto } from '../../common/dtos/product/update-product.dto';

@Injectable()
export class ProductRepository extends Repository<Product> {
  constructor(dataSource: DataSource) {
    // The createEntityManager() method is typically called on a DataSource instance, which represents the database connection and configuration.
    super(Product, dataSource.createEntityManager());
  }

  createProduct(createProductDto: CreateProductDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Product).values(createProductDto).returning('*').execute();
  }

  findProductById(id: number) {
    return this.createQueryBuilder('product').where('id = :id', { id }).getOne();
  }

  async findAllProducts(): Promise<IProduct[]> {
    return this.find();
  }

  async updateProduct(id: number, updateProductDto: UpdateProductDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Product).set(updateProductDto).where('id = :id', { id }).returning('*').execute();
  }

  async deleteProduct(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(Product).where('id = :id', { id }).returning('*').execute();
  }
}
