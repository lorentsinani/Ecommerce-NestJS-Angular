import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../../domain/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PasswordUtil } from '../../common/utils/password.util';
import { CreateUserDto } from '../../common/dtos/users/create-user.dto';
import { UserType } from '../../common/constants/enums/user-type.enum';
import { IUser } from '../../common/interfaces/user.interface';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { JwtUtil } from '../../common/utils/jwt-util';
import { Socket } from 'socket.io';
import { WsException } from '@nestjs/websockets';

interface CustomSocket extends Socket {
  jwtPayload?: JwtPayload;
}

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async signIn(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    const passwordMatched = await PasswordUtil.comparePassword(password, user?.password);
    if (!passwordMatched) {
      throw new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST);
    }

    const payload = { sub: user.id, username: user.email, role: user.user_type };

    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }

  async singUp(createUserDto: CreateUserDto): Promise<IUser> {
    const { email }: { email: string } = createUserDto;
    const userExist = await this.usersService.findByEmail(email);

    if (userExist) {
      throw new HttpException('User already exist', HttpStatus.BAD_REQUEST);
    }

    return this.usersService.create({ ...createUserDto, user_type: UserType.Customer });
  }

  verifySocketJwtToken(socket: CustomSocket): boolean {
    try {
      const token = JwtUtil.extractTokenFromSocketHeader(socket);

      if (!token) {
        throw new WsException('Missing JWT token');
      }

      const payload: JwtPayload = this.jwtService.verify(token, { secret: 'secret' });

      if (payload.role == UserType.Customer || payload.role == UserType.Employee) {
        socket.jwtPayload = payload;
        return true;
      }

      return false;
    } catch (error) {
      throw new WsException(`Invalid JWT Token ErrorMessage: ${error}`);
    }
  }
}
