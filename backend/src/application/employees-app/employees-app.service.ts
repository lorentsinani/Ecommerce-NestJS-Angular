import { Injectable } from '@nestjs/common';
import { UsersService } from '../../domain/users/users.service';

import { CreateUserDto } from '../../common/dtos/users/create-user.dto';
import { CreateEmployeeDto } from '../../common/dtos/employees/create-employee';
import { IUser } from '../../common/interfaces/user.interface';

import { EmployeesService } from '../../domain/employees/employees.service';
import { IEmployee } from '../../common/interfaces/employee.interface';

@Injectable()
export class EmployeesAppService {
  constructor(private readonly usersService: UsersService, private readonly employeeService: EmployeesService) {}

  async createUserEmployee(
    createUserDto: CreateUserDto,
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<{ user: IUser; employee: IEmployee }> {
    const userData = await this.usersService.create(createUserDto);

    const employeeData = await this.employeeService.create({ ...createEmployeeDto, user_id: userData.id });
    const combinedData = {
      user: userData,
      employee: employeeData,
    };
    return combinedData;
  }
}

