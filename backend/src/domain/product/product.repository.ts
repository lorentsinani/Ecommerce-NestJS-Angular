import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Product } from '../entities/product.entity';
import { CreateProductDto } from '../../common/dtos/product/create-product.dto';
import { UpdateProductDto } from '../../common/dtos/product/update-product.dto';
import { Category } from '../entities/category.entity';
import { NumberOfProducts } from '../../common/interfaces/number-of-products.interface';

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

  countProductsByCategory(category_id: number): Promise<NumberOfProducts[]> {
    return this.createQueryBuilder('product')
      .innerJoin(Category, 'category', 'product.category_id = category.id')
      .select(['category.id', 'category.category_name', 'COUNT(*) as "number_of_products"'])
      .groupBy('category.id')
      .getRawMany();
  }

  searchProduct(searchTerm: string): Promise<Product[]> {
    return this.createQueryBuilder('product')
      .innerJoin('product.productDetails', 'product_details')
      .leftJoinAndSelect('product.category', 'category')
      .where(
        `product.product_name LIKE :searchTerm 
          OR product.product_code LIKE :searchTerm 
          OR product_details.color LIKE :searchTerm 
          OR category.category_name LIKE :searchTerm`,
        { searchTerm: `%${searchTerm}%` }
      )
      .getMany();
  }

  async getNewArrivalProducts(): Promise<Product[]> {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    return this.createQueryBuilder('product').where('product.created_at >= :date', { date: oneWeekAgo }).getMany();
  }
  updateProduct(id: number, updateProductDto: UpdateProductDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Product).set(updateProductDto).where('id = :id', { id }).returning('*').execute();
  }

  deleteProduct(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(Product).where('id = :id', { id }).returning('*').execute();
  }
}
