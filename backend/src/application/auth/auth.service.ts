import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../../domain/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PasswordUtil } from '../../common/utils/password.util';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async signIn(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    const passwordMatched = await PasswordUtil.comparePassword(password, user?.password);
    if (!passwordMatched) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    const payload = { sub: user.id, username: user.email, role: user.user_type };

    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }
}
