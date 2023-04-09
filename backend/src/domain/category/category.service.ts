import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { CreateCategoryDto } from '../../common/dtos/category/create-category.dto';
import { ICategory } from '../../common/interfaces/category.interface';
import { UpdateCategoryDto } from '../../common/dtos/category/update-category.dto';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async create(categoryBody: CreateCategoryDto): Promise<ICategory> {
    const category = this.categoryRepository.create(categoryBody);

    return this.categoryRepository.save(category);
  }

  async findOneById(id: number): Promise<ICategory> {
    const category = await this.categoryRepository.findOne({ where: { id } });

    if (!category) {
      throw new HttpException('Category not found!', HttpStatus.NOT_FOUND);
    }
    return category;
  }

  async findAll(): Promise<ICategory[]> {
    return this.categoryRepository.find();
  }

  async update(id: number, categoryBody: UpdateCategoryDto): Promise<UpdateResult> {
    const updateCategory = await this.categoryRepository.update(id, categoryBody);

    if (updateCategory.affected === 0) {
      throw new HttpException('Category not found!', HttpStatus.NOT_FOUND);
    }
    return updateCategory;
  }

  async delete(id: number): Promise<ICategory> {
    return this.categoryRepository.deleteCategory(id);
  }
}
