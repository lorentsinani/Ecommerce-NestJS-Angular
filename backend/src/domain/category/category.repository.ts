import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Category } from '../entities/category.entity';
import { CreateCategoryDto } from '../../common/dtos/category/create-category.dto';
import { UpdateCategoryDto } from '../../common/dtos/category/update-category.dto';

@Injectable()
export class CategoryRepository extends Repository<Category> {
  constructor(dataSource: DataSource) {
    super(Category, dataSource.createEntityManager());
  }

  createCategory(createCategoryDto: CreateCategoryDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Category).values(createCategoryDto).returning('*').execute();
  }

  findAllCategories(): Promise<Category[]> {
    return this.find();
  }

  findCategoryById(id: number): Promise<Category | null> {
    return this.createQueryBuilder('category').where('category.id = :id', { id }).getOne();
  }

  findCategoryByCategoryName(category_name: string): Promise<Category | null> {
    return this.createQueryBuilder('category').where('category.category_name = :category_name', { category_name }).getOne();
  }

  updateCategory(id: number, updateCategoryDto: UpdateCategoryDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Category).set(updateCategoryDto).where('id = :id', { id }).returning('*').execute();
  }

  deleteCategory(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(Category).where('id = :id', { id }).returning('*').execute();
  }
}
