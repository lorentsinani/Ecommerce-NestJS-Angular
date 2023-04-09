import { Employee } from './../entities/employee.entity';
import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { IEmployee } from '../../common/interfaces/employee.interface';
import { UpdateEmployeeDto } from '../../common/dtos/employees/update-employee';
import { CreateEmployeeDto } from '../../common/dtos/employees/create-employee';
import { User } from '../entities/user.entity';

@Injectable()
export class EmployeesRepository extends Repository<Employee> {
  constructor(dataSource: DataSource) {
    super(Employee, dataSource.createEntityManager());
  }
  async createEmployee(createEmployeeDto: CreateEmployeeDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Employee).values(createEmployeeDto).returning('*').execute();
  }

  async findAllEmployees(): Promise<IEmployee[]> {
    return this.find();
  }

  async findEmployeeById(id: number): Promise<IEmployee | null> {
    return this.findOne({ where: { user_id: id } });
  }

  async findEmployeeByEmail(email: string): Promise<IEmployee | null> {
    return this.createQueryBuilder('employee')
      .innerJoinAndSelect('employee.user', 'user', 'user.email = :email', { email })
      .getOne();
  }

  async updateEmployee(user_id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<UpdateResult> {
    return this.createQueryBuilder()
      .update(Employee)
      .set(updateEmployeeDto)
      .where('user_id = :user_id', { user_id })
      .execute();
  }

  async deleteEmployee(user_id: number): Promise<DeleteResult> {
    return this.manager
      .getRepository(User)
      .createQueryBuilder()
      .delete()
      .from(User)
      .where('id = :id', { id: user_id })
      .returning('*')
      .execute();
  }
}
