import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ParseIntPipe,
  UseFilters,
  UsePipes,
  ValidationPipe,
  Put,
  Delete,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { IAdmin } from '../../common/interfaces/admin.interface';
import { ValidationExceptionFilter } from '../../common/filters/validation-exception.filter';
import { CreateAdminDto } from '../../common/dtos/admin/create-admin.dto';
import { UpdateAdminDto } from '../../common/dtos/admin/update-admin.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Get()
  async findAll(): Promise<IAdmin[]> {
    return this.adminService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<IAdmin> {
    return this.adminService.findOneById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @UseFilters(new ValidationExceptionFilter())
  async create(@Body() createAdminDto: CreateAdminDto): Promise<any> {
    return this.adminService.create(createAdminDto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  @UseFilters(new ValidationExceptionFilter())
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateAdminDto: UpdateAdminDto): Promise<UpdateResult> {
    return this.adminService.update(id, updateAdminDto);
  }
  @Delete(':id')
  @UsePipes(new ValidationPipe())
  @UseFilters(new ValidationExceptionFilter())
  async delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.adminService.delete(id);
  }
}
