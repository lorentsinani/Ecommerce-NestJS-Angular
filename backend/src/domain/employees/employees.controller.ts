import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, UseGuards } from '@nestjs/common';
import { Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { IEmployee } from '../../common/interfaces/employee.interface';
import { ValidationExceptionFilter } from '../../common/filters/validation-exception.filter';
import { CreateEmployeeDto } from '../../common/dtos/employees/create-employee';
import { UpdateEmployeeDto } from '../../common/dtos/employees/update-employee';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { EmployeeGuard } from '../../common/guards/emp.guard';
@Controller('employees')
@UseGuards(EmployeeGuard)
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseFilters(new ValidationExceptionFilter())
  async create(@Body() createUserDto: CreateEmployeeDto): Promise<IEmployee> {
    return this.employeesService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<IEmployee[]> {
    return this.employeesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) user_id: number): Promise<IEmployee> {
    return this.employeesService.findById(user_id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe(), new NullDtoValidationPipe())
  @UseFilters(new ValidationExceptionFilter())
  async update(@Param('id', ParseIntPipe) user_id: number, @Body() updateEmployeeDto: UpdateEmployeeDto): Promise<IEmployee> {
    return this.employeesService.update(user_id, updateEmployeeDto);
  }

  @Delete(':id')
  async delete(user_id: number): Promise<IEmployee> {
    return this.employeesService.delete(user_id);
  }
}
