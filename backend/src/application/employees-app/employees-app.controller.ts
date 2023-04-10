import { Body, Controller, Post } from '@nestjs/common';

import { CreateUserDto } from '../../common/dtos/users/create-user.dto';
import { CreateEmployeeDto } from '../../common/dtos/employees/create-employee';
import { EmployeesAppService } from './employees-app.service';

@Controller('employees-app')
export class EmployeesAppController {
  constructor(private readonly employeeService: EmployeesAppService) {}
  @Post()
  async createUserAndEmployee(@Body() body: { userData: CreateUserDto; employeeData: CreateEmployeeDto }) {
    const { userData, employeeData } = body;
    return this.employeeService.createUserEmployee(userData, employeeData);
  }
}

