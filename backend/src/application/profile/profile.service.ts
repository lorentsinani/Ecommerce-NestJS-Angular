import { UpdateUserDto } from './../../common/dtos/users/update-user.dto';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../../domain/users/users.service';
import { User } from '../../domain/entities/user.entity';

@Injectable()
export class ProfileService {
  constructor(private usersService: UsersService) {}

  findUserDetails(userId: number): Promise<User> {
    return this.usersService.findById(userId);
  }

  updateUserDetails(userId: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.usersService.update(userId, updateUserDto);
  }
}
