import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Employee } from './../entities/employee.entity';
import { UpdateEmployeeDto } from '../../common/dtos/employees/update-employee';
import { CreateEmployeeDto } from '../../common/dtos/employees/create-employee';
import { User } from '../entities/user.entity';

@Injectable()
export class EmployeesRepository extends Repository<Employee> {
  constructor(dataSource: DataSource) {
    super(Employee, dataSource.createEntityManager());
  }
  createEmployee(createEmployeeDto: CreateEmployeeDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Employee).values(createEmployeeDto).returning('*').execute();
  }

  findAllEmployees(): Promise<Employee[]> {
    return this.find({ relations: ['user'] });
  }

  findEmployeeById(id: number): Promise<Employee | null> {
    return this.createQueryBuilder('employee').innerJoinAndSelect('employee.user', 'user', 'user.id = :id', { id }).getOne();
  }

  findEmployeeByEmail(email: string): Promise<Employee | null> {
    return this.createQueryBuilder('employee').innerJoinAndSelect('employee.user', 'user', 'user.email = :email', { email }).getOne();
  }

  updateEmployee(user_id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Employee).set(updateEmployeeDto).where('user_id = :user_id', { user_id }).execute();
  }

  deleteEmployee(user_id: number): Promise<DeleteResult> {
    return this.manager.getRepository(User).createQueryBuilder().delete().from(User).where('id = :id', { id: user_id }).returning('*').execute();
  }
}
