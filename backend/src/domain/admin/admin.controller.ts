import { Body, Controller, Get, Param, Post, Patch, UseGuards } from '@nestjs/common';
import { ParseIntPipe, UseFilters, UsePipes, ValidationPipe, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from '../../common/dtos/admin/create-admin.dto';
import { UpdateAdminDto } from '../../common/dtos/admin/update-admin.dto';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { AdminGuard } from '../../common/guards/admin.guard';
import { QueryExceptionFilter } from '../../common/filters/query.exception.filter';
import { Admin } from '../entities/admin.entity';

@Controller('admin')
@UsePipes(new ValidationPipe())
// @UseGuards(AdminGuard)
@UseFilters(new QueryExceptionFilter('Admin'))
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Post()
  create(@Body() createAdminDto: CreateAdminDto): Promise<Admin> {
    return this.adminService.create(createAdminDto);
  }

  @Get()
  findAll(): Promise<Admin[]> {
    return this.adminService.findAll();
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Admin> {
    return this.adminService.findById(id);
  }

  @Patch(':id')
  @UsePipes(new NullDtoValidationPipe())
  update(@Param('id', ParseIntPipe) id: number, @Body() updateAdminDto: UpdateAdminDto): Promise<Admin> {
    return this.adminService.update(id, updateAdminDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) user_id: number): Promise<Admin> {
    return this.adminService.delete(user_id);
  }
}
