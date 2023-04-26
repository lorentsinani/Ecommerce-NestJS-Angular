import { Body, Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { ParseIntPipe, Patch, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from '../../common/dtos/category/create-category.dto';
import { UpdateCategoryDto } from '../../common/dtos/category/update-category.dto';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { Category } from '../entities/category.entity';
import { QueryExceptionFilter } from '../../common/filters/query.exception.filter';
import { CheckPermissions } from '../../common/decorators/check-permission.decorator';
import { PermissionsGuard } from '../../common/guards/permissions.guard';
import { PermissionAction } from '../../common/constants/enums/permission-action.enum';
import { PermissionObject } from '../../common/constants/enums/permission-object.enum';

@Controller('category')
@UsePipes(new ValidationPipe())
@UseFilters(new QueryExceptionFilter('Category'))
export class CategoryController {
  constructor(private categoryService: CategoryService) {}


  // This line shows how you can use the Authorization based on permissions
  @Post()
  @UseGuards(PermissionsGuard)
  @CheckPermissions([PermissionAction.Create, PermissionObject.Category])
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
