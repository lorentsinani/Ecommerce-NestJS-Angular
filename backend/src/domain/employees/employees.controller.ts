import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, UseGuards } from '@nestjs/common';
import { Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from '../../common/dtos/employees/create-employee';
import { UpdateEmployeeDto } from '../../common/dtos/employees/update-employee';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { QueryExceptionFilter } from '../../common/filters/query.exception.filter';
import { Employee } from '../entities/employee.entity';

@Controller('employees')
@UsePipes(new ValidationPipe())
// @UseGuards(EmployeeGuard)
@UseFilters(new QueryExceptionFilter('Employees'))
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Post()
  create(@Body() createUserDto: CreateEmployeeDto): Promise<Employee> {
    return this.employeesService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<Employee[]> {
    return this.employeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) user_id: number): Promise<Employee> {
    return this.employeesService.findById(user_id);
  }

  @Patch(':id')
  @UsePipes(new NullDtoValidationPipe())
  update(@Param('id', ParseIntPipe) user_id: number, @Body() updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
    return this.employeesService.update(user_id, updateEmployeeDto);
  }

  @Delete(':id')
  delete(user_id: number): Promise<Employee> {
    return this.employeesService.delete(user_id);
  }
}
