import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ICategory } from '../../common/interfaces/category.interface';
import { CreateCategoryDto } from '../../common/dtos/category/create-category.dto';
import { UpdateCategoryDto } from '../../common/dtos/category/update-category.dto';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  private NotCreatedExceptionMessage = 'Category is not created';
  private NotFoundExceptionMessage = 'Category not found';

  constructor(private readonly categoryRepository: CategoryRepository) {}

  async create(categoryBody: CreateCategoryDto): Promise<ICategory> {
    const createdCategory = await this.categoryRepository.createCategory(categoryBody);

    if (!createdCategory) {
      throw new HttpException(this.NotCreatedExceptionMessage, HttpStatus.BAD_REQUEST);
    }

    return createdCategory.raw[0];
  }

  async findAll(): Promise<ICategory[]> {
    const categoryExist = await this.categoryRepository.findAllCategories();

    if (!categoryExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return categoryExist;
  }

  async findById(id: number): Promise<ICategory> {
    const categoryExist = await this.categoryRepository.findCategoryById(id);

    if (!categoryExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return categoryExist;
  }

  async findByCategoryName(category_name: string): Promise<ICategory> {
    const categoryExist = await this.categoryRepository.findCategoryByCategoryName(category_name);

    if (!categoryExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return categoryExist;
  }

  async update(id: number, categoryBody: UpdateCategoryDto): Promise<ICategory> {
    const updatedCateogry = await this.categoryRepository.updateCategory(id, categoryBody);

    if (!updatedCateogry) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return updatedCateogry.raw[0];
  }

  async delete(id: number): Promise<ICategory> {
    const deletedCategory = await this.categoryRepository.deleteCategory(id);

    if (!deletedCategory) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedCategory.raw[0];
  }
}
