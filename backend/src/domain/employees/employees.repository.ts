import { Employee } from './../entities/employee.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { IEmployee } from '../../common/interfaces/employee.interface';
import { UpdateEmployeeDto } from '../../common/dtos/employees/update-employee';
import { CreateEmployeeDto } from '../../common/dtos/employees/create-employee';
import { User } from '../entities/user.entity';

@Injectable()
export class EmployeesRepository extends Repository<Employee> {
  constructor(dataSource: DataSource) {
    super(Employee, dataSource.createEntityManager());
  }
  async findEmployeeById(id: number): Promise<IEmployee> {
    const employee = await this.findOne({ where: { user_id: id } });
    if (!employee) {
      throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
    }

    return employee;
  }

  async findEmployeeByEmail(email: string): Promise<IEmployee> {
    const employee = await this.createQueryBuilder('employee')
      .innerJoinAndSelect('employee.user', 'user', 'user.email = :email', { email })
      .getOne();

    if (!employee) {
      throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
    }

    return employee;
  }

  async findAllEmployees(): Promise<IEmployee[]> {
    return this.find();
  }

  async createEmployee(createEmployeeDto: CreateEmployeeDto): Promise<IEmployee> {
    const createdEmployee = await this.createQueryBuilder()
      .insert()
      .into(Employee)
      .values(createEmployeeDto)
      .returning('*')
      .execute();

    return createdEmployee.raw;
  }

  async updateEmployee(user_id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<IEmployee> {
    
    const updatedEmployee = await this.createQueryBuilder()
      .update(Employee)
      .set(updateEmployeeDto)
      .where('user_id = :user_id', { user_id })
      .execute();

    if (!updatedEmployee.affected) {
      throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
    }
    return updatedEmployee.raw;
  }

  async deleteEmployee(user_id: number): Promise<IEmployee> {
    const deletedEmployee = await this.manager
      .getRepository(User)
      .createQueryBuilder()
      .delete()
      .from(User)
      .where('id = :id', { id: user_id })
      .returning('*')
      .execute();

    if (!deletedEmployee.affected) {
      throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
    }

    return deletedEmployee.raw;
  }
}
