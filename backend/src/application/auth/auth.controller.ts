import { CustomerGuard } from './../../common/guards/user.guard';
import { Body, Controller, Get, Post, UseFilters, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../../application/auth/auth.service';
import { AdminGuard } from '../../common/guards/admin.guard';
import { EmployeeGuard } from '../../common/guards/emp.guard';
import { SignInDto } from '../../common/dtos/application/auth/sing-in.dto';
import { CreateUserDto } from '../../common/dtos/users/create-user.dto';
import { IUser } from '../../common/interfaces/user.interface';
import { DuplicateKeyExceptionFilter } from '../../common/filters/duplicate-key-exception.filter';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: SignInDto) {
    return this.authService.signIn(body.email, body.password);
  }

  @Post('register')
  @UsePipes(new ValidationPipe())
  @UseFilters(new DuplicateKeyExceptionFilter('User'))
  async register(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    return this.authService.registerUser(createUserDto);
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
