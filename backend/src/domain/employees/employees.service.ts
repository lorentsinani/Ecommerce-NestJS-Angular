import { IEmployee } from '../../common/interfaces/employee.interface';
import { UpdateEmployeeDto } from '../../common/dtos/employees/update-employee';
import { CreateEmployeeDto } from '../../common/dtos/employees/create-employee';
import { EmployeesRepository } from './employees.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeesService {
  constructor(private readonly employeesRepository: EmployeesRepository) {}

  async createEmployee(createUserDto: CreateEmployeeDto): Promise<IEmployee> {
    const user = this.employeesRepository.create(createUserDto);
    return this.employeesRepository.save(user);
  }

  async findAll(): Promise<IEmployee[]> {
    return this.employeesRepository.find();
  }

  async findEmployeeById(user_id: number): Promise<IEmployee> {
    return this.employeesRepository.findEmployeeById(user_id);
  }

  async updateEmployee(user_id: number, updateUserDto: UpdateEmployeeDto): Promise<IEmployee> {
    return this.employeesRepository.updateEmployee(user_id, updateUserDto);
  }
  async deleteEmployee(user_id: number): Promise<IEmployee> {
    return this.employeesRepository.deleteEmployee(user_id);
  }
}
