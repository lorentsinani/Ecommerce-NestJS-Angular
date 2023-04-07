import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ICategory } from 'src/common/interfaces/category.interface';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from 'src/common/dtos/category.dtos/create-category.dto';
import { UpdateCategoryDto } from 'src/common/dtos/category.dtos/update-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  async createCategory(@Body() categoryBody: CreateCategoryDto): Promise<ICategory> {
    return await this.categoryService.create(categoryBody);
  }

  @Get(':id')
  async findCategory(@Param('id', ParseIntPipe) id: number): Promise<ICategory> {
    return await this.categoryService.findOneById(id);
  }

  @Get()
  async findAllCategories(): Promise<ICategory[]> {
    return await this.categoryService.findAll();
  }

  @Delete('/:id')
  async removeCategory(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return await this.categoryService.remove(id);
  }

  @Patch('/:id')
  async updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() categoryBody: UpdateCategoryDto,
  ): Promise<UpdateResult> {
    return await this.categoryService.update(id, categoryBody);
  }
}
