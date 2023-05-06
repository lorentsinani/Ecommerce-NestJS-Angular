import { Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppAdminService } from './app-admin.service';
import { CreateUserDto } from '../../common/dtos/users/create-user.dto';
import { CreateAdminDto } from '../../common/dtos/admin/create-admin.dto';
import { Body } from '@nestjs/common';
import { CreateEmployeeDto } from '../../common/dtos/employees/create-employee';
import { UpdateUserDto } from '../../common/dtos/users/update-user.dto';
import { UpdateAdminDto } from '../../common/dtos/admin/update-admin.dto';
import { UpdateEmployeeDto } from '../../common/dtos/employees/update-employee';
import { DuplicateKeyExceptionFilter } from '../../common/filters/duplicate-key-exception.filter';

@Controller('admin-app')
// @UseGuards(AdminGuard)
@UsePipes(new ValidationPipe())
export class AppAdminController {
  constructor(private readonly adminAppService: AppAdminService) {}

  @Post('admin')
  @UseFilters(new DuplicateKeyExceptionFilter('Admin'))
  async createAdmin(@Body() body: { userDto: CreateUserDto; adminDto: CreateAdminDto }) {
    const { userDto, adminDto } = body;
    return this.adminAppService.createAdmin(userDto, adminDto);
  }

  @Post('employees')
  @UseFilters(new DuplicateKeyExceptionFilter('Employee'))
  async createEmployee(@Body() body: { userDto: CreateUserDto; employeeDto: CreateEmployeeDto }) {
    const { userDto, employeeDto } = body;
    return this.adminAppService.createEmployee(userDto, employeeDto);
  }

  @Get('admin')
  async findAllAdmins() {
    return this.adminAppService.findAllAdmins();
  }

  @Get('employees')
  async findAllEmployees() {
    return this.adminAppService.findAllEmployees();
  }

  @Get('admin/:id')
  async findAdminById(@Param('id', ParseIntPipe) id: number) {
    return this.adminAppService.findAdminById(id);
  }

  @Get('employees/:id')
  async findEmployeeById(@Param('id', ParseIntPipe) id: number) {
    return this.adminAppService.findEmployeeById(id);
  }

  @Patch('admin/:id')
  @UseFilters(new DuplicateKeyExceptionFilter('Admin'))
  async updateAdminUser(@Param('id', ParseIntPipe) id: number, @Body() body: { userDto: UpdateUserDto; adminDto: UpdateAdminDto }) {
    const { userDto, adminDto } = body;
    return this.adminAppService.updateAdmin(id, userDto, adminDto);
  }

  @Patch('employees/:id')
  @UseFilters(new DuplicateKeyExceptionFilter('Employee'))
  async updateEmployeeUser(@Param('id', ParseIntPipe) id: number, @Body() body: { userDto: UpdateUserDto; employeeDto: UpdateEmployeeDto }) {
    const { userDto, employeeDto } = body;
    return this.adminAppService.updateEmployee(id, userDto, employeeDto);
  }

  @Delete('admin/:id')
  async deleteAdmin(@Param('id', ParseIntPipe) id: number) {
    return this.adminAppService.deleteAdmin(id);
  }

  @Delete('employees/:id')
  async deleteUserEmployee(@Param('id', ParseIntPipe) id: number) {
    return this.adminAppService.deleteEmployee(id);
  }
}
