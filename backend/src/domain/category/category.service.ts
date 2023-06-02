import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../../common/dtos/category/create-category.dto';
import { UpdateCategoryDto } from '../../common/dtos/category/update-category.dto';
import { CategoryRepository } from './category.repository';
import { Category } from '../entities/category.entity';
import { InsertResult } from 'typeorm';
import { uploadImage } from 'src/common/utils/upload-util';

@Injectable()
export class CategoryService {
  private NotCreatedExceptionMessage = 'Category is not created';
  private NotFoundExceptionMessage = 'Category not found';

  constructor(private readonly categoryRepository: CategoryRepository) {}

  async create(categoryBody: CreateCategoryDto): Promise<Category> {
    categoryBody = { ...categoryBody, categoryImage: await uploadImage(categoryBody.categoryImage as Express.Multer.File, 'categories') };
    const createdCategory = await this.categoryRepository.createCategory(categoryBody);

    if (!this.getIdentifierId(createdCategory)) {
      throw new HttpException(this.NotCreatedExceptionMessage, HttpStatus.BAD_REQUEST);
    }

    return createdCategory.raw[0];
  }

  findAll(): Promise<Category[]> {
    return this.categoryRepository.findAllCategories();
  }

  async findById(id: number): Promise<Category> {
    const categoryExist = await this.categoryRepository.findCategoryById(id);

    if (!categoryExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return categoryExist;
  }

  async findByCategoryName(category_name: string): Promise<Category> {
    const categoryExist = await this.categoryRepository.findCategoryByCategoryName(category_name);

    if (!categoryExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return categoryExist;
  }

  async update(id: number, categoryBody: UpdateCategoryDto): Promise<Category> {
    const updatedCateogry = await this.categoryRepository.updateCategory(id, categoryBody);

    if (!updatedCateogry) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return updatedCateogry.raw[0];
  }

  async delete(id: number): Promise<Category> {
    const deletedCategory = await this.categoryRepository.deleteCategory(id);

    if (!deletedCategory) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedCategory.raw[0];
  }

  getIdentifierId(result: InsertResult) {
    return result.identifiers[0].id == -1 ? false : true;
  }
}
