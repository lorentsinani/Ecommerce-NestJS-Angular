import { Body, Controller, Patch, Post, Query, UseFilters, Request, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../../application/auth/auth.service';
import { SignInDto } from '../../common/dtos/application/auth/sing-in.dto';
import { CreateUserDto } from '../../common/dtos/users/create-user.dto';
import { IUser } from '../../common/interfaces/user.interface';
import { DuplicateKeyExceptionFilter } from '../../common/filters/duplicate-key-exception.filter';
import { LoginResponse } from '../../common/interfaces/login-response.interface';
import { ResetPasswordDto } from '../../common/dtos/password-reset/password-reset.dto';
import { User } from '../../domain/entities/user.entity';
import { JwtUtil } from '../../common/utils/jwt-util';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { Request as R } from 'express';
interface CustomRequest extends R {
  jwtPayload?: JwtPayload;
}

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
  logout(@Request() request: CustomRequest) {
    const token = JwtUtil.extractTokenFromHeader(request) as string;
    return this.authService.logout(token);
  }

  @Post('account-verification-link')
  sendAccountVerificationLinkToEmail(@Body() email: string): Promise<{ message: string }> {
    return this.authService.sendAccountVerificationLinkToEmail(email);
  }

  @Patch('verify-account')
  verifyUserAccount(@Query('verify_token') verifyToken: string): Promise<User> {
    return this.authService.verifyUserAccount(verifyToken);
  }

  @Post('reset-password-link')
  sendResetPasswordLinkToEmail(@Body() resetPasswordDto: ResetPasswordDto): Promise<{ message: string }> {
    return this.authService.sendResetPasswordLinkToEmail(resetPasswordDto);
  }

  @Patch('reset-password')
  resetUserPassword(@Query('reset_token') resetToken: string, password: string): Promise<User> {
    return this.authService.resetUserPassword(resetToken, password);
  }
}
