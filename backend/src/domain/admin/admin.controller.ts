import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ParseIntPipe, UseFilters, UsePipes, ValidationPipe, Put, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { IAdmin } from '../../common/interfaces/admin.interface';
import { ValidationExceptionFilter } from '../../common/filters/validation-exception.filter';
import { CreateAdminDto } from '../../common/dtos/admin/create-admin.dto';
import { UpdateAdminDto } from '../../common/dtos/admin/update-admin.dto';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Get()
  async findAll(): Promise<IAdmin[]> {
    return this.adminService.findAllAdmins();
  }
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<IAdmin> {
    return this.adminService.findAdminById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @UseFilters(new ValidationExceptionFilter())
  async createAdmin(@Body() createAdminDto: CreateAdminDto): Promise<IAdmin> {
    return this.adminService.createAdmin(createAdminDto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe(), new NullDtoValidationPipe())
  @UseFilters(new ValidationExceptionFilter())
  async updateAdmin(@Param('id', ParseIntPipe) id: number, @Body() updateAdminDto: UpdateAdminDto): Promise<IAdmin> {
    return this.adminService.updateAdmin(id, updateAdminDto);
  }
  @Delete(':id')
  @UsePipes(new ValidationPipe())
  @UseFilters(new ValidationExceptionFilter())
  async delete(@Param('id', ParseIntPipe) user_id: number): Promise<IAdmin> {
    return this.adminService.deleteAdmin(user_id);
  }
}
