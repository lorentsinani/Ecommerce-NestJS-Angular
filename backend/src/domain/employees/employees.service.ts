import { IEmployee } from '../../common/interfaces/employee.interface';
import { UpdateEmployeeDto } from '../../common/dtos/employees/update-employee';
import { CreateEmployeeDto } from '../../common/dtos/employees/create-employee';
import { EmployeesRepository } from './employees.repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class EmployeesService {
  constructor(private readonly employeesRepository: EmployeesRepository) {}

  async create(createUserDto: CreateEmployeeDto): Promise<IEmployee> {
    const createdEmployee = await this.employeesRepository.createEmployee(createUserDto);

    if (!createdEmployee) {
      throw new HttpException('Employee is not created', HttpStatus.BAD_REQUEST);
    }
    return createdEmployee.raw[0];
  }

  async findAll(): Promise<IEmployee[]> {
    return this.employeesRepository.findAllEmployees();
  }

  async findById(user_id: number): Promise<IEmployee> {
    const employee = await this.employeesRepository.findEmployeeById(user_id);

    if (!employee) {
      throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
    }

    return employee;
  }

  async update(user_id: number, updateUserDto: UpdateEmployeeDto): Promise<IEmployee> {
    const updatedEmployee = await this.employeesRepository.updateEmployee(user_id, updateUserDto);

    if (!updatedEmployee.affected) {
      throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
    }

    return updatedEmployee.raw[0];
  }

  async delete(user_id: number): Promise<IEmployee> {
    const deletedEmployee = await this.employeesRepository.deleteEmployee(user_id);

    if (!deletedEmployee.affected) {
      throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
    }

    return deletedEmployee.raw[0];
  }
}
