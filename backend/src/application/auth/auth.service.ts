import { JwtPayload } from './../../common/interfaces/jwt-payload.interface';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../../domain/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PasswordUtil } from '../../common/utils/password.util';
import { CreateUserDto } from '../../common/dtos/users/create-user.dto';
import { Socket } from 'socket.io';
import { PermissionsService } from '../../domain/permissions/permissions.service';
import { Permission } from '../../domain/entities/permission.entity';
import { User } from '../../domain/entities/user.entity';
import { UserRole } from '../../common/constants/enums/user-rol.enum';
import { LoginResponse } from '../../common/interfaces/login-response.interface';
import { RoleService } from '../../domain/role/role.service';

interface CustomSocket extends Socket {
  jwtPayload?: JwtPayload;
}

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService, private permissionsService: PermissionsService, private roleService: RoleService) {}

  async login(email: string, password: string): Promise<LoginResponse> {
    const user = await this.usersService.findOneUserByEmailWithRole(email);

    const passwordMatch = await PasswordUtil.comparePassword(password, user?.password);

    if (!passwordMatch) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    const tokenPayload = this.generateTokenPayload(user);
    const accessToken = await this.jwtService.signAsync(tokenPayload);
    const redirectUrl = this.generateRedirectUrl(user.role.name);

    return { accessToken, redirectUrl };
  }

  async registerCustomer(createUserDto: CreateUserDto): Promise<User> {
    const userExist = await this.usersService.userExist(createUserDto.email);

    if (userExist) throw new HttpException('User already exist', HttpStatus.BAD_REQUEST);

    const role = await this.roleService.findRoleByName(UserRole.Customer);

    return this.usersService.create({ ...createUserDto, roleId: role.id });
  }

  findAllPermissionsOfRole(role_id: number): Promise<Permission[]> {
    return this.permissionsService.findAllPermissionsOfRole(role_id);
  }

  private generateTokenPayload(user: User) {
    const payload: JwtPayload = {
      sub: user.id,
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role
      }
    };

    return payload;
  }

  private generateRedirectUrl(role: UserRole): string {
    let redirectUrl = '';
    switch (role) {
      case UserRole.Admin:
        redirectUrl = '/admin';
        break;
      case UserRole.Employee:
        redirectUrl = '/employee';
        break;
      case UserRole.Customer:
        redirectUrl = '/';
        break;
    }

    return redirectUrl;
  }

  //

  //

  //

  //

  //

  //

  //
  async logout() {
    console.log();
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
