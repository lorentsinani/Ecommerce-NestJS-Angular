import { Body, Controller, Get, Param, Post, Patch, UseGuards } from '@nestjs/common';
import { ParseIntPipe, UseFilters, UsePipes, ValidationPipe, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { IAdmin } from '../../common/interfaces/admin.interface';
import { ValidationExceptionFilter } from '../../common/filters/validation-exception.filter';
import { CreateAdminDto } from '../../common/dtos/admin/create-admin.dto';
import { UpdateAdminDto } from '../../common/dtos/admin/update-admin.dto';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { AdminGuard } from '../../common/guards/admin.guard';

@Controller('admin')
@UseGuards(AdminGuard)
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseFilters(new ValidationExceptionFilter())
  async create(@Body() createAdminDto: CreateAdminDto): Promise<IAdmin> {
    return this.adminService.create(createAdminDto);
  }

  @Get()
  async findAll(): Promise<IAdmin[]> {
    return this.adminService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<IAdmin> {
    return this.adminService.findById(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe(), new NullDtoValidationPipe())
  @UseFilters(new ValidationExceptionFilter())
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateAdminDto: UpdateAdminDto): Promise<IAdmin> {
    return this.adminService.update(id, updateAdminDto);
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe())
  @UseFilters(new ValidationExceptionFilter())
  async delete(@Param('id', ParseIntPipe) user_id: number): Promise<IAdmin> {
    return this.adminService.delete(user_id);
  }
}
