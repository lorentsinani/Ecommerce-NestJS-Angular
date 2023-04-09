import { Body, Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Post, Put, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { IEmployee } from '../../common/interfaces/employee.interface';
import { ValidationExceptionFilter } from '../../common/filters/validation-exception.filter';
import { CreateEmployeeDto } from '../../common/dtos/employees/create-employee';
import { UpdateEmployeeDto } from '../../common/dtos/employees/update-employee';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseFilters(new ValidationExceptionFilter())
  async createEmployee(@Body() createUserDto: CreateEmployeeDto): Promise<IEmployee> {
    return this.employeesService.createEmployee(createUserDto);
  }

  @Get()
  async findAll(): Promise<IEmployee[]> {
    return this.employeesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) user_id: number): Promise<IEmployee> {
    return this.employeesService.findEmployeeById(user_id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe(), new NullDtoValidationPipe())
  @UseFilters(new ValidationExceptionFilter())
  async updateEmployee(
    @Param('id', ParseIntPipe) user_id: number,
    @Body() updateEmployeeDto: UpdateEmployeeDto
  ): Promise<IEmployee> {
    return this.employeesService.updateEmployee(user_id, updateEmployeeDto);
  }

  @Delete(':id')
  async deleteEmployee(user_id: number): Promise<IEmployee> {
    return this.employeesService.deleteEmployee(user_id);
  }
}
