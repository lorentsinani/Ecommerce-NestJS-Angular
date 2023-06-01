import { Controller, UseGuards } from '@nestjs/common';

import { AppEmployeeService } from './app-employee.service';

@Controller('employees-app')
export class AppEmployeeController {
  constructor(private readonly employeeService: AppEmployeeService) {}
}
