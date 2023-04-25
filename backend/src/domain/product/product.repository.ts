import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Product } from '../entities/product.entity';
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

  findProductById(id: number): Promise<Product | null> {
    return this.createQueryBuilder('product').where('id = :id', { id }).getOne();
  }

  findAllProducts(): Promise<Product[]> {
    return this.find();
  }

  updateProduct(id: number, updateProductDto: UpdateProductDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Product).set(updateProductDto).where('id = :id', { id }).returning('*').execute();
  }

  deleteProduct(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(Product).where('id = :id', { id }).returning('*').execute();
  }

  countProductsByCategory(category_id: number): Promise<number[]> {
    return this.createQueryBuilder('product')
      .select('MAX(categoryCount.count)', 'maxCount')
      .where('product.category_id = :category_id', { category_id })
      .leftJoin(
        qb => qb.from(Product, 'p').select('p.category_id, COUNT(*)', 'count').groupBy('p.category_id'),
        'categoryCount',
        'product.category_id = categoryCount.category_id'
      )
      .addGroupBy('product.category_id')
      .getRawMany();
  }
}
