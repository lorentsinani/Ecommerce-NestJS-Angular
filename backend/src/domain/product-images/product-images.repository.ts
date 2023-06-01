import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ProductImages } from '../entities/product-images.entity';
import { CreateProductImageDto } from '../../common/dtos/product-images/create-product-images.dto';
import { UpdateProductImageDto } from '../../common/dtos/product-images/update-product-images.dto';

@Injectable()
export class ProductImagesRepository extends Repository<ProductImages> {
  constructor(dataSource: DataSource) {
    super(ProductImages, dataSource.createEntityManager());
  }

  createProductImages(createProductImagesDto: CreateProductImageDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(ProductImages).values(createProductImagesDto).returning('*').execute();
  }

  findAllProductImages(): Promise<ProductImages[]> {
    return this.find();
  }

  findProductImagesById(id: number): Promise<ProductImages | null> {
    return this.createQueryBuilder('product_images').where('id = :id', { id }).getOne();
  }

  findProductImagesByUrl(url: string): Promise<ProductImages | null> {
    return this.createQueryBuilder('product_images').where('url = :url', { url }).getOne();
  }

  updateProductImages(id: number, updateProductImagesDto: UpdateProductImageDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(ProductImages).set(updateProductImagesDto).where('id = :id', { id }).returning('*').execute();
  }

  deleteProductImages(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(ProductImages).where('id = :id', { id }).returning('*').execute();
  }
}
