import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { UpdateEmployeeDto } from '../../common/dtos/employees/update-employee';
import { CreateEmployeeDto } from '../../common/dtos/employees/create-employee';
import { EmployeesRepository } from './employees.repository';
import { Employee } from '../entities/employee.entity';

@Injectable()
export class EmployeesService {
  constructor(private readonly employeesRepository: EmployeesRepository) {}

  async create(createUserDto: CreateEmployeeDto): Promise<Employee> {
    const createdEmployee = await this.employeesRepository.createEmployee(createUserDto);

    if (!this.getIdentifierId(createdEmployee)) {
      throw new HttpException('Employee is not created', HttpStatus.BAD_REQUEST);
    }
    return createdEmployee.raw[0];
  }

  findAll(): Promise<Employee[]> {
    return this.employeesRepository.findAllEmployees();
  }

  async findById(user_id: number): Promise<Employee> {
    const employee = await this.employeesRepository.findEmployeeById(user_id);

    if (!employee) {
      throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
    }

    return employee;
  }

  async findAvailableEmployees(): Promise<Employee[]> {
    return this.employeesRepository.findAvailableEmployees();
  }
  async fetchEmployee(searchTerm: string): Promise<Employee[]> {
    return this.employeesRepository.fetchEmployees(searchTerm);
  }
  async update(user_id: number, updateUserDto: UpdateEmployeeDto): Promise<Employee> {
    const updatedEmployee = await this.employeesRepository.updateEmployee(user_id, updateUserDto);

    if (!updatedEmployee.affected) {
      throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
    }

    return updatedEmployee.raw[0];
  }

  async delete(user_id: number): Promise<Employee> {
    const deletedEmployee = await this.employeesRepository.deleteEmployee(user_id);

    if (!deletedEmployee.affected) {
      throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
    }

    return deletedEmployee.raw[0];
  }

  getIdentifierId(result: InsertResult) {
    return result.identifiers[0].id == -1 ? false : true;
  }
}
