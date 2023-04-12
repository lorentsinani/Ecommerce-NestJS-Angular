import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { ICategory } from '../../common/interfaces/category.interface';
import { Category } from '../entities/category.entity';
import { CreateCategoryDto } from '../../common/dtos/category/create-category.dto';
import { UpdateCategoryDto } from '../../common/dtos/category/update-category.dto';

@Injectable()
export class CategoryRepository extends Repository<Category> {
  constructor(dataSource: DataSource) {
    super(Category, dataSource.createEntityManager());
  }

  async createCategory(createCategoryDto: CreateCategoryDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Category).values(createCategoryDto).returning('*').execute();
  }

  async findAllCategories(): Promise<ICategory[]> {
    return this.find();
  }

  async findCategoryById(id: number): Promise<ICategory | null> {
    return this.createQueryBuilder('category').where('category.id = :id', { id }).getOne();
  }

  async findCategoryByCategoryName(category_name: string): Promise<ICategory | null> {
    return this.createQueryBuilder('category').where('category.category_name = :category_name', { category_name }).getOne();
  }

  async updateCategory(id: number, updateCategoryDto: UpdateCategoryDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Category).set(updateCategoryDto).where('id = :id', { id }).returning('*').execute();
  }

  async deleteCategory(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(Category).where('id = :id', { id }).returning('*').execute();
  }
}
