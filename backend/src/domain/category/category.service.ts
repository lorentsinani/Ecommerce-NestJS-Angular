import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../../common/dtos/category/create-category.dto';
import { ICategory } from '../../common/interfaces/category.interface';
import { UpdateCategoryDto } from '../../common/dtos/category/update-category.dto';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  private static CreateExceptionMessage = 'Category is not created';
  private static FindExceptionMessage = 'Category not found';

  constructor(private readonly categoryRepository: CategoryRepository) {}

  async create(categoryBody: CreateCategoryDto): Promise<ICategory> {
    const createdCategory = await this.categoryRepository.createCategory(categoryBody);

    if (!createdCategory) {
      throw new HttpException(CategoryService.CreateExceptionMessage, HttpStatus.BAD_REQUEST);
    }

    return createdCategory.raw[0];
  }

  async findAll(): Promise<ICategory[]> {
    const categoryExist = await this.categoryRepository.findAllCategories();

    if (!categoryExist) {
      throw new HttpException(CategoryService.FindExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return categoryExist;
  }

  async findById(id: number): Promise<ICategory> {
    const categoryExist = await this.categoryRepository.findCategoryById(id);

    if (!categoryExist) {
      throw new HttpException(CategoryService.FindExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return categoryExist;
  }

  async findByCategoryName(category_name: string): Promise<ICategory> {
    const categoryExist = await this.categoryRepository.findCategoryByCategoryName(category_name);

    if (!categoryExist) {
      throw new HttpException(CategoryService.FindExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return categoryExist;
  }

  async update(id: number, categoryBody: UpdateCategoryDto): Promise<ICategory> {
    const updatedCateogry = await this.categoryRepository.updateCategory(id, categoryBody);

    if (!updatedCateogry) {
      throw new HttpException(CategoryService.FindExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return updatedCateogry.raw[0];
  }

  async delete(id: number): Promise<ICategory> {
    const deletedCategory = await this.categoryRepository.deleteCategory(id);

    if (!deletedCategory) {
      throw new HttpException(CategoryService.FindExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedCategory.raw[0];
  }
}
