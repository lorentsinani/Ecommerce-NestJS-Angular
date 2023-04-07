import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { IEmployee } from '../../common/interfaces/employee.interface';
import { ValidationExceptionFilter } from '../../common/filters/validation-exception.filter';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateEmployeeDto } from '../../common/dtos/employees/update-employee';
import { CreateEmployeeDto } from '../../common/dtos/employees/create-employee';

@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Get()
  async findAll(): Promise<IEmployee[]> {
    return this.employeesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<IEmployee> {
    return this.employeesService.findOneById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @UseFilters(new ValidationExceptionFilter())
  async create(@Body() createUserDto: CreateEmployeeDto): Promise<any> {
    return this.employeesService.create(createUserDto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  @UseFilters(new ValidationExceptionFilter())
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<UpdateResult> {
    return this.employeesService.update(id, updateEmployeeDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.employeesService.delete(id);
  }
}
