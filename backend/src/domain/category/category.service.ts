import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { Category } from '../entities/category.entity';
import { CreateCategoryDto } from '../../common/dtos/category/create-category.dto';
import { ICategory } from '../../common/interfaces/category.interface';
import { UpdateCategoryDto } from '../../common/dtos/category/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {}

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

  findAll(): Promise<ICategory[]> {
    return this.categoryRepository.find();
  }

  async update(id: number, categoryBody: UpdateCategoryDto): Promise<UpdateResult> {
    const updateCategory = await this.categoryRepository.update(id, categoryBody);

    if (updateCategory.affected === 0) {
      throw new HttpException('Category not found!', HttpStatus.NOT_FOUND);
    }
    return updateCategory;
  }

  async delete(id: number): Promise<DeleteResult> {
    const deletedCategory = await this.categoryRepository.delete(id);

    if (deletedCategory.affected === 0) {
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }
    return deletedCategory;
  }
}
