import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Employee } from '../entities/employee.entity';
import { IEmployee } from '../../common/interfaces/employee.interface';
import { UpdateEmployeeDto } from '../../common/dtos/employees/update-employee';
import { CreateEmployeeDto } from '../../common/dtos/employees/create-employee';
import { UpdateResult } from 'typeorm';
import { EmployeesRepository } from './employees.repository';

@Injectable()
export class EmployeesService {
  constructor(private readonly employeesRepository: EmployeesRepository) {}

  async findOneById(id: number): Promise<Employee> {
    const user = await this.employeesRepository.findOne({ where: { id } });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async findAll(): Promise<IEmployee[]> {
    return this.employeesRepository.find();
  }

  async create(createUserDto: CreateEmployeeDto): Promise<IEmployee> {
    const user = this.employeesRepository.create(createUserDto);
    return this.employeesRepository.save(user);
  }

  async update(id: number, updateUserDto: UpdateEmployeeDto): Promise<UpdateResult> {
    const updatedEmployee = await this.employeesRepository.update(id, updateUserDto);
    if (updatedEmployee.affected === 0) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return updatedEmployee;
  }

  async delete(id: number): Promise<IEmployee> {
    return this.employeesRepository.deleteEmployee(id);
  }
}
