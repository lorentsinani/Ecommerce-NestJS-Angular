import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../../common/dtos/category/create-category.dto';
import { ICategory } from '../../common/interfaces/category.interface';
import { UpdateCategoryDto } from '../../common/dtos/category/update-category.dto';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async createCategory(categoryBody: CreateCategoryDto): Promise<ICategory> {
    return this.categoryRepository.createCategory(categoryBody);
  }

  async findAll(): Promise<ICategory[]> {
    return this.categoryRepository.find();
  }

  async findCategoryById(id: number): Promise<ICategory> {
    return this.categoryRepository.findCategoryById(id);
  }

  async findCategoryByCategoryName(category_name: string): Promise<ICategory> {
    return this.categoryRepository.findCategoryByCategoryName(category_name);
  }

  async updateCategory(id: number, categoryBody: UpdateCategoryDto): Promise<ICategory> {
    return this.categoryRepository.updateCategory(id, categoryBody);
  }

  async deleteCategory(id: number): Promise<ICategory> {
    return this.categoryRepository.deleteCategory(id);
  }
}
