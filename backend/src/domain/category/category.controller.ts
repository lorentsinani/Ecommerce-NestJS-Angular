import { Body, Controller, Delete, Get, Param } from '@nestjs/common';
import { ParseIntPipe, Patch, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from '../../common/dtos/category/create-category.dto';
import { UpdateCategoryDto } from '../../common/dtos/category/update-category.dto';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { Category } from '../entities/category.entity';
import { QueryExceptionFilter } from '../../common/filters/query.exception.filter';

@Controller('category')
@UsePipes(new ValidationPipe())
@UseFilters(new QueryExceptionFilter('Category'))
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  create(@Body() categoryBody: CreateCategoryDto): Promise<Category> {
    return this.categoryService.create(categoryBody);
  }

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Promise<Category> {
    return this.categoryService.findById(id);
  }

  @Patch(':id')
  @UsePipes(new NullDtoValidationPipe())
  update(@Param('id', ParseIntPipe) id: number, @Body() categoryBody: UpdateCategoryDto): Promise<Category> {
    return this.categoryService.update(id, categoryBody);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<Category> {
    return this.categoryService.delete(id);
  }
}
