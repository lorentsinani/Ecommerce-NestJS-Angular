import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseFilters,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from '../../common/dtos/category/create-category.dto';
import { ICategory } from '../../common/interfaces/category.interface';
import { UpdateCategoryDto } from '../../common/dtos/category/update-category.dto';
import { DuplicateKeyExceptionFilter } from '../../common/filters/duplicate-key-exception.filter';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseFilters(new DuplicateKeyExceptionFilter())
  async createCategory(@Body() categoryBody: CreateCategoryDto): Promise<ICategory> {
    return this.categoryService.createCategory(categoryBody);
  }

  @Get()
  async findAll(): Promise<ICategory[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  async findCategoryById(@Param('id', ParseIntPipe) id: number): Promise<ICategory> {
    return this.categoryService.findCategoryById(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe(), new NullDtoValidationPipe())
  @UseFilters(new DuplicateKeyExceptionFilter())
  async updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() categoryBody: UpdateCategoryDto
  ): Promise<ICategory> {
    return this.categoryService.updateCategory(id, categoryBody);
  }

  @Delete(':id')
  async deleteCategory(@Param('id', ParseIntPipe) id: number): Promise<ICategory> {
    return this.categoryService.deleteCategory(id);
  }
}
