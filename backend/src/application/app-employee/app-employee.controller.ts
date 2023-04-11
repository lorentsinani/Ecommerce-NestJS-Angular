import { Controller, UseGuards } from '@nestjs/common';
import { EmployeeGuard } from '../../common/guards/emp.guard';
import { AppEmployeeService } from './app-employee.service';

@Controller('employees-app')
@UseGuards(EmployeeGuard)
export class AppEmployeeController {
  constructor(private readonly employeeService: AppEmployeeService) {}
}
