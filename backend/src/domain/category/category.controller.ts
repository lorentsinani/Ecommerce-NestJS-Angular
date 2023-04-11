import { Body, Controller, Delete, Get, Param } from '@nestjs/common';
import { ParseIntPipe, Patch, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from '../../common/dtos/category/create-category.dto';
import { ICategory } from '../../common/interfaces/category.interface';
import { UpdateCategoryDto } from '../../common/dtos/category/update-category.dto';
import { DuplicateKeyExceptionFilter } from '../../common/filters/duplicate-key-exception.filter';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';

@Controller('category')
@UsePipes(new ValidationPipe())
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  @UseFilters(new DuplicateKeyExceptionFilter('Category'))
  async create(@Body() categoryBody: CreateCategoryDto): Promise<ICategory> {
    return this.categoryService.create(categoryBody);
  }

  @Get()
  async findAll(): Promise<ICategory[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<ICategory> {
    return this.categoryService.findById(id);
  }

  @Patch(':id')
  @UsePipes(new NullDtoValidationPipe())
  @UseFilters(new DuplicateKeyExceptionFilter('Category'))
  async update(@Param('id', ParseIntPipe) id: number, @Body() categoryBody: UpdateCategoryDto): Promise<ICategory> {
    return this.categoryService.update(id, categoryBody);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<ICategory> {
    return this.categoryService.delete(id);
  }
}
