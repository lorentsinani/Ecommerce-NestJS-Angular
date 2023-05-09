import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../../domain/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PasswordUtil } from '../../common/utils/password.util';
import { CreateUserDto } from '../../common/dtos/users/create-user.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { Socket } from 'socket.io';
import { PermissionsService } from '../../domain/permissions/permissions.service';
import { Permission } from '../../domain/entities/permission.entity';
import { User } from '../../domain/entities/user.entity';
import { MailerService } from '../../domain/mailer/mailer.service';
import { ResetPasswordDto } from '../../common/dtos/password-reset/password-reset.dto';
import { IJwtConfig } from '../../config/jwt-config';
import { ConfigService } from '@nestjs/config';

interface CustomSocket extends Socket {
  jwtPayload?: JwtPayload;
}

@Injectable()
export class AuthService {
  private jwtConfig: IJwtConfig;
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private permissionsService: PermissionsService,
    private mailService: MailerService,
    private configService: ConfigService
  ) {
    this.jwtConfig = this.configService.get('jwt') as IJwtConfig;
  }

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    const passwordMatched = await PasswordUtil.comparePassword(password, user?.password);

    if (!passwordMatched) {
      throw new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST);
    }

    const payload = this.generateTokenPayload(user);

    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }

  async register(createUserDto: CreateUserDto): Promise<User> {
    const { email }: { email: string } = createUserDto;
    const userExist = await this.usersService.userExist(email);

    if (userExist) {
      throw new HttpException('User already exist', HttpStatus.BAD_REQUEST);
    }

    return this.usersService.create({ ...createUserDto });
  }

  async logout() {}

  findAllPermissionsOfRole(role_id: number): Promise<Permission[]> {
    return this.permissionsService.findAllPermissionsOfRole(role_id);
  }

  private generateTokenPayload(user: User) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, id, ...userDataWithoutPassword } = user;
    return { sub: id, user: { ...userDataWithoutPassword } };
  }

  async sendAccountVerificationLinkToEmail(email: string): Promise<{ message: string }> {
    try {
      const verificationToken = this.jwtService.sign({ email }, { expiresIn: `${this.jwtConfig.jwt_expires_in}` });

      await this.mailService.sendVerificationEmail(email, verificationToken);

      return { message: `Verification link sent successfully to: ${email}` };
    } catch (error) {
      throw new HttpException('Unable to send verification link', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async verifyUserAccount(verificationToken: string): Promise<User> {
    try {
      const { email } = this.jwtService.verify(verificationToken) as { email: string };
      const user = await this.usersService.userExist(email);

      if (!user) {
        throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
      }

      const verified = true;
      return this.usersService.update(user.id, { verified } as User);
    } catch (error) {
      throw new HttpException('Invalid verification token', HttpStatus.BAD_REQUEST);
    }
  }

  async sendResetPasswordLinkToEmail(resetPasswordDto: ResetPasswordDto): Promise<{ message: string }> {
    try {
      const email = resetPasswordDto.email;
      const user = await this.usersService.userExist(email);

      if (!user) {
        throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
      }
      const resetPasswordToken = this.jwtService.sign({ sub: user.id }, { expiresIn: `${this.jwtConfig.jwt_expires_in}` });
      await this.mailService.sendResetPasswordLinkToEmail(user.email, resetPasswordToken);

      return { message: `Link to reset password was sent successfully to ${user.email}. You have 1 day before the link expires.` };
    } catch (error) {
      throw new HttpException('Unable to send link to reset password.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async resetUserPassword(resetPasswordToken: string, password: string): Promise<User> {
    try {
      const decodedToken = this.jwtService.verify(resetPasswordToken) as { sub: number };

      return this.usersService.update(decodedToken.sub, { password } as User);
    } catch (error) {
      throw new HttpException('Invalid reset password token', HttpStatus.BAD_REQUEST);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  verifySocketJwtToken(socket: CustomSocket): boolean {
    // try {
    //   const token = JwtUtil.extractTokenFromSocketHeader(socket);

    //   if (!token) {
    //     throw new WsException('Missing JWT token');
    //   }

    //   const payload: JwtPayload = this.jwtService.verify(token, { secret: 'secret' });

    //   if (payload.role == UserRole.Customer || payload.role == UserRole.Employee) {
    //     socket.jwtPayload = payload;
    //     return true;
    //   }

    //   return false;
    // } catch (error) {
    //   throw new WsException(`Invalid JWT Token ErrorMessage: ${error}`);
    // }
    return true;
  }
}
