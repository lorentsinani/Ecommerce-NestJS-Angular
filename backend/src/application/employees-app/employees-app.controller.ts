import { Controller, UseGuards } from '@nestjs/common';
import { EmployeesAppService } from './employees-app.service';
import { EmployeeGuard } from '../../common/guards/emp.guard';

@Controller('employees-app')
@UseGuards(EmployeeGuard)
export class EmployeesAppController {
  constructor(private readonly employeeService: EmployeesAppService) {}
}
