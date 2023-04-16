import { UsersRepository } from './users.repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../../common/dtos/users/update-user.dto';
import { CreateUserDto } from '../../common/dtos/users/create-user.dto';
import { User } from '../entities/user.entity';
import { InsertResult } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createUser = await this.usersRepository.createUser(createUserDto);

    if (!this.getIdentifierId(createUser)) {
      throw new HttpException('User is not created', HttpStatus.BAD_REQUEST);
    }

    return createUser.raw[0];
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.findAllUsers();
  }

  async findById(id: number): Promise<User> {
    const userExist = await this.usersRepository.findUserById(id);

    if (!userExist) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return userExist;
  }

  async findByEmail(email: string): Promise<User> {
    const userExist = await this.usersRepository.findUserByEmail(email);

    if (!userExist) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return userExist;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const updatedUser = await this.usersRepository.updateUser(id, updateUserDto);

    if (!updatedUser.affected) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return updatedUser.raw[0];
  }

  async delete(id: number): Promise<User> {
    const deletedUser = await this.usersRepository.deleteUser(id);

    if (!deletedUser.affected) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return deletedUser.raw[0];
  }

  getIdentifierId(result: InsertResult) {
    return result.identifiers[0].id == -1 ? false : true;
  }
}
