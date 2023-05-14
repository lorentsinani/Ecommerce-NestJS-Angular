import { UpdateUserDto } from './../../common/dtos/users/update-user.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../../domain/users/users.service';
import { User } from '../../domain/entities/user.entity';
import { ChangePasswordDto } from '../../common/dtos/profile/change-password.dto';
import { PasswordUtil } from '../../common/utils/password.util';

@Injectable()
export class ProfileService {
  constructor(private usersService: UsersService) {}

  findUserDetails(userId: number): Promise<User> {
    return this.usersService.findById(userId);
  }

  updateUserDetails(userId: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.usersService.update(userId, updateUserDto);
  }

  async updateUserPassword(userId: number, changePasswordDto: ChangePasswordDto): Promise<User> {
    const user = await this.usersService.findById(userId);

    if (!user) {
      throw new HttpException(`User does not exist`, HttpStatus.NOT_FOUND);
    }

    const { currentPassword, newPassword } = changePasswordDto;

    const passwordMatch = await PasswordUtil.comparePassword(currentPassword, newPassword);

    if (!passwordMatch) {
      throw new HttpException(
        `Unable to change password. The old password entered is incorrect. Please try again with the correct old password.`,
        HttpStatus.UNAUTHORIZED
      );
    }

    return this.usersService.update(userId, { password: newPassword } as UpdateUserDto);
  }
}
