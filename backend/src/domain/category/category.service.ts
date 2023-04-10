import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../../common/dtos/category/create-category.dto';
import { ICategory } from '../../common/interfaces/category.interface';
import { UpdateCategoryDto } from '../../common/dtos/category/update-category.dto';
import { CategoryRepository } from './category.repository';

const createExceptionMessage = 'Category is not created';
const findExceptionMessage = 'Category not found';
@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async create(categoryBody: CreateCategoryDto): Promise<ICategory> {
    const createdCategory = await this.categoryRepository.createCategory(categoryBody);

    if (!createdCategory) {
      throw new HttpException(createExceptionMessage, HttpStatus.BAD_REQUEST);
    }

    return createdCategory.raw;
  }

  async findAll(): Promise<ICategory[]> {
    const existCategory = await this.categoryRepository.findAllCategories();

    if (!existCategory) {
      throw new HttpException(findExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return existCategory;
  }

  async findById(id: number): Promise<ICategory> {
    const existCategory = await this.categoryRepository.findCategoryById(id);

    if (!existCategory) {
      throw new HttpException(findExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return existCategory;
  }

  async findByCategoryName(category_name: string): Promise<ICategory> {
    const existCategory = await this.categoryRepository.findCategoryByCategoryName(category_name);

    if (!existCategory) {
      throw new HttpException(findExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return existCategory;
  }

  async update(id: number, categoryBody: UpdateCategoryDto): Promise<ICategory> {
    const updatedCateogry = await this.categoryRepository.updateCategory(id, categoryBody);

    if (!updatedCateogry) {
      throw new HttpException(findExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return updatedCateogry.raw;
  }

  async delete(id: number): Promise<ICategory> {
    const deletedCategory = await this.categoryRepository.deleteCategory(id);

    if (!deletedCategory) {
      throw new HttpException(findExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedCategory.raw;
  }
}
