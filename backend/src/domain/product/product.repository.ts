import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, InsertResult, Repository, Timestamp, UpdateResult } from 'typeorm';
import { Product } from '../entities/product.entity';
import { CreateProductDto } from '../../common/dtos/product/create-product.dto';
import { UpdateProductDto } from '../../common/dtos/product/update-product.dto';
import { Category } from '../entities/category.entity';
import { NumberOfProducts } from '../../common/interfaces/number-of-products.interface';
import { DynamicProductFilterDto } from 'src/common/dtos/product/dynamic-product-filter.dto';

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
        `CAST(product.product_code AS VARCHAR) LIKE :searchTerm
        OR product.product_name LIKE :searchTerm 
        OR product_details.color LIKE :searchTerm 
        OR category.category_name LIKE :searchTerm`,
        { searchTerm: `%${searchTerm}%` }
      )
      .getMany();
  }

  async getNewArrivalProducts(oneWeekAgo: Date): Promise<Product[]> {
    return this.createQueryBuilder('product').where('product.created_at >= :date', { date: oneWeekAgo }).getMany();
  }
  updateProduct(id: number, updateProductDto: UpdateProductDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Product).set(updateProductDto).where('id = :id', { id }).returning('*').execute();
  }

  deleteProduct(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(Product).where('id = :id', { id }).returning('*').execute();
  }

  findProductsOnDiscount(): Promise<Product[]> {
    const query = this.createQueryBuilder('product')
      .addSelect('ROUND((product.price_with_vat - (product.price_with_vat * product.discount / 100))::numeric, 2)', 'product_price_after_discount')
      .andWhere('product.discount > 0.00')
      .andWhere('product.discountExpirationDate IS NOT NULL');

    return query.getMany();
  }

  findProductsFilter(filterDto: DynamicProductFilterDto): Promise<Product[]> {
    const query = this.createQueryBuilder('product');

    if (filterDto.producer_id) {
      query.innerJoin('product.product_details', 'product_details').andWhere('product_details.producer_id = :producer_id', { producer_id: filterDto.producer_id });
    }

    if (filterDto.price?.min && filterDto.price?.max) {
      query.andWhere('product.price_with_vat BETWEEN :min AND :max', {
        min: filterDto.price.min,
        max: filterDto.price.max
      });
    } else if (filterDto.price?.min) {
      query.andWhere('product.price_with_vat >= :min', { min: filterDto.price.min });
    } else if (filterDto.price?.max) {
      query.andWhere('product.price_with_vat <= :max', { max: filterDto.price.max });
    }

    if (filterDto.supplier_id) {
      query.andWhere('product.supplier_id = :supplier_id', {
        supplier_id: filterDto.supplier_id
      });
    }

    if (filterDto.category_id) {
      query.andWhere('product.category_id = :category_id', {
        category_id: filterDto.category_id
      });
    }

    if (filterDto.discount) {
      query.andWhere('product.discount > 0.00');
    }

    if (filterDto.availability_in_stock) {
      query.andWhere('product.availability_in_stock >= 1');
    }

    return query.getMany();
  }
}
