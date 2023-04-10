import { UsersRepository } from './users.repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IUser } from '../../common/interfaces/user.interface';
import { UpdateUserDto } from '../../common/dtos/users/update-user.dto';
import { CreateUserDto } from '../../common/dtos/users/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    const createUser = await this.usersRepository.createUser(createUserDto);

    if (!createUser) {
      throw new HttpException('User is not created', HttpStatus.BAD_REQUEST);
    }

    return createUser.raw[0];
  }

  async findAll(): Promise<IUser[]> {
    return this.usersRepository.findAllUsers();
  }

  async findById(id: number): Promise<IUser> {
    const userExist = await this.usersRepository.findUserById(id);

    if (!userExist) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return userExist;
  }

  async findByEmail(email: string): Promise<IUser> {
    const userExist = await this.usersRepository.findUserByEmail(email);

    if (!userExist) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return userExist;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<IUser> {
    const updatedUser = await this.usersRepository.updateUser(id, updateUserDto);

    if (!updatedUser.affected) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return updatedUser.raw[0];
  }

  async delete(id: number): Promise<IUser> {
    const deletedUser = await this.usersRepository.deleteUser(id);

    if (!deletedUser.affected) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return deletedUser.raw[0];
  }
}
