import { CustomerGuard } from './../../common/guards/user.guard';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from '../../application/auth/auth.service';
import { AdminGuard } from '../../common/guards/admin.guard';
import { EmployeeGuard } from '../../common/guards/emp.guard';
import { SignInDto } from '../../common/dtos/application/auth/sing-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: SignInDto) {
    return this.authService.signIn(body.email, body.password);
  }

  @UseGuards(AdminGuard)
  @Get('admin')
  async getAdmin() {
    return 'Admin Profile';
  }

  @UseGuards(EmployeeGuard)
  @Get('employee')
  async getEmployee() {
    return 'Employee Profile';
  }

  @UseGuards(CustomerGuard)
  @Get('customer')
  async getCustomer() {
    return 'Customer Profile';
  }
}
