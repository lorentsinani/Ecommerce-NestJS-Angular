import { UsersRepository } from './users.repository';
import { Injectable } from '@nestjs/common';
import { IUser } from '../../common/interfaces/user.interface';
import { UpdateUserDto } from '../../common/dtos/users/update-user.dto';
import { CreateUserDto } from '../../common/dtos/users/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findUserById(id: number): Promise<IUser> {
    return this.usersRepository.findUserById(id);
  }

  async findUserByEmail(email: string): Promise<IUser> {
    return this.usersRepository.findUserByEmail(email);
  }

  async findAllUsers(): Promise<IUser[]> {
    return this.usersRepository.find();
  }

  async createUser(createUserDto: CreateUserDto): Promise<IUser> {
    return this.usersRepository.createUser(createUserDto);
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<IUser> {
    return this.usersRepository.updateUser(id, updateUserDto);
  }

  async deleteUser(id: number): Promise<IUser> {
    return this.usersRepository.deleteUser(id);
  }
}
