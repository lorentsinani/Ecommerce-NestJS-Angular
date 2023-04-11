import { Injectable } from '@nestjs/common';
import { UsersService } from '../../domain/users/users.service';

import { EmployeesService } from '../../domain/employees/employees.service';

@Injectable()
export class EmployeesAppService {
  constructor(private readonly usersService: UsersService, private readonly employeeService: EmployeesService) {}
}
