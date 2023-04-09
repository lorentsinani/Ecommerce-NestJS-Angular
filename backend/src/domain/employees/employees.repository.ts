import { Employee } from './../entities/employee.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { IEmployee } from '../../common/interfaces/employee.interface';

@Injectable()
export class EmployeesRepository extends Repository<Employee> {
  constructor(dataSource: DataSource) {
    super(Employee, dataSource.createEntityManager());
  }

  async deleteEmployee(id: number): Promise<IEmployee> {
    const deletedEmployee = await this.findOne({ where: { id } });

    if (!deletedEmployee) {
      throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
    }

    await this.createQueryBuilder().delete().from(Employee).where('id = :id', { id }).returning('*').execute();
    return deletedEmployee;
  }
}
