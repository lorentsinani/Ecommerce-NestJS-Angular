import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Employee } from '../entities/employee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IEmployee } from '../../common/interfaces/employee.interface';
import { UpdateEmployeeDto } from '../../common/dtos/employees/update-employee';
import { CreateEmployeeDto } from '../../common/dtos/employees/create-employee';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class EmployeesService {
  constructor(@InjectRepository(Employee) private usersRepository: Repository<Employee>) {}

  async findOneById(id: number): Promise<Employee> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async findAll(): Promise<IEmployee[]> {
    return this.usersRepository.find();
  }

  async create(createUserDto: CreateEmployeeDto): Promise<IEmployee> {
    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  async update(id: number, updateUserDto: UpdateEmployeeDto): Promise<UpdateResult> {
    const result = await this.usersRepository.update(id, updateUserDto);
    if (result.affected === 0) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  async delete(id: number): Promise<DeleteResult> {
    const result = await this.usersRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }
}
