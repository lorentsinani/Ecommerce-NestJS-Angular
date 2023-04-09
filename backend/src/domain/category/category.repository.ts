import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ICategory } from '../../common/interfaces/category.interface';
import { Category } from '../entities/category.entity';
import { CreateCategoryDto } from '../../common/dtos/category/create-category.dto';
import { UpdateCategoryDto } from '../../common/dtos/category/update-category.dto';

@Injectable()
export class CategoryRepository extends Repository<Category> {
  constructor(dataSource: DataSource) {
    super(Category, dataSource.createEntityManager());
  }
  async findCategoryById(id: number): Promise<ICategory> {
    const categoryExist = await this.findOne({ where: { id } });

    if (!categoryExist) {
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }

    return categoryExist;
  }

  async findCategoryByCode(category_name: string): Promise<ICategory> {
    const categoryExist = await this.findOne({ where: { category_name } });

    if (!categoryExist) {
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }

    return categoryExist;
  }

  async createCategory(createCategoryDto: CreateCategoryDto): Promise<ICategory> {
    const createdCategory = await this.createQueryBuilder()
      .insert()
      .into(Category)
      .values(createCategoryDto)
      .returning('*')
      .execute();

    return createdCategory.raw;
  }
  async updateCategory(id: number, updateCategoryDto: UpdateCategoryDto): Promise<ICategory> {
    const updatedCategory = await this.createQueryBuilder()
      .update(Category)
      .set(updateCategoryDto)
      .where('id = :id', { id })
      .returning('*')
      .execute();

    if (!updatedCategory.affected) {
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }

    return updatedCategory.raw;
  }

  async deleteCategory(id: number): Promise<ICategory> {
    const deletedCategory = await this.createQueryBuilder()
      .delete()
      .from(Category)
      .where('id = :id', { id })
      .returning('*')
      .execute();

    if (!deletedCategory.affected) {
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }

    return deletedCategory.raw;
  }
}
