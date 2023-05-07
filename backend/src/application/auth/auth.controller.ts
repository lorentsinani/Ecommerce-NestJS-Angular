import { Body, Controller, Patch, Post, Query, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../../application/auth/auth.service';
import { SignInDto } from '../../common/dtos/application/auth/sing-in.dto';
import { CreateUserDto } from '../../common/dtos/users/create-user.dto';
import { IUser } from '../../common/interfaces/user.interface';
import { DuplicateKeyExceptionFilter } from '../../common/filters/duplicate-key-exception.filter';
import { ResetPasswordDto } from '../../common/dtos/password-reset/password-reset.dto';
import { User } from '../../domain/entities/user.entity';

@Controller('auth')
@UsePipes(new ValidationPipe())
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: SignInDto) {
    return this.authService.login(body.email, body.password);
  }

  @Post('register')
  @UseFilters(new DuplicateKeyExceptionFilter('User'))
  async singUp(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    return this.authService.register(createUserDto);
  }

  @Post('logout')
  async logout(@Body() body: any) {}

  @Post('account-verification-link')
  async sendLinkToVerifyAccount(@Body() email: string): Promise<void> {
    await this.authService.sendVerificationEmail(email);
  }

  @Patch('verify-account')
  verifyAccount(@Query('verify_token') verifyToken: string): Promise<User> {
    return this.authService.verifyEmail(verifyToken);
  }

  @Post('reset-password-link')
  async sendResetPasswordEmail(@Body() resetPasswordDto: ResetPasswordDto): Promise<void> {
    await this.authService.sendResetPasswordEmail(resetPasswordDto);
  }

  @Patch('reset-password')
  resetPassword(@Query('reset_token') resetToken: string, password: string): Promise<User> {
    return this.authService.resetPassword(resetToken, password);
  }
}
