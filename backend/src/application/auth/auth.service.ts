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

interface CustomSocket extends Socket {
  jwtPayload?: JwtPayload;
}

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService, private permissionsService: PermissionsService) {}

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
