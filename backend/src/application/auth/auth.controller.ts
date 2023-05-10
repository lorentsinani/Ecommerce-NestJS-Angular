import { Body, Controller, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../../application/auth/auth.service';
import { SignInDto } from '../../common/dtos/application/auth/sing-in.dto';
import { CreateUserDto } from '../../common/dtos/users/create-user.dto';
import { IUser } from '../../common/interfaces/user.interface';
import { DuplicateKeyExceptionFilter } from '../../common/filters/duplicate-key-exception.filter';
import { LoginResponse } from '../../common/interfaces/login-response.interface';

@Controller('auth')
@UsePipes(new ValidationPipe())
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: SignInDto): Promise<LoginResponse> {
    return this.authService.login(body.email, body.password);
  }

  @Post('register')
  @UseFilters(new DuplicateKeyExceptionFilter('User'))
  async singUp(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    return this.authService.registerCustomer(createUserDto);
  }

  @Post('logout')
  async logout(@Body() body: any) {}
}
