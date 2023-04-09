import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Category } from '../entities/category.entity';
import { ICategory } from '../../common/interfaces/category.interface';

@Injectable()
export class CategoryRepository extends Repository<Category> {
  constructor(dataSource: DataSource) {
    super(Category, dataSource.createEntityManager());
  }

  async deleteCategory(id: number): Promise<ICategory> {
    const deletedCategory = await this.findOne({ where: { id } });

    if (!deletedCategory) {
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }

    await this.createQueryBuilder().delete().from(Category).where('id = :id', { id }).returning('*').execute();
    return deletedCategory;
  }
}
