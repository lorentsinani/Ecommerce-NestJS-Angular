import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { IUser } from '../../common/interfaces/user.interface';
import { UpdateUserDto } from '../../common/dtos/users/update-user.dto';
import { CreateUserDto } from '../../common/dtos/users/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

  async findOneById(id: number): Promise<IUser> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async findAll(): Promise<IUser[]> {
    return this.usersRepository.find();
  }

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    const result = await this.usersRepository.update(id, updateUserDto);
    if (result.affected === 0) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  async delete(id: number): Promise<DeleteResult> {
    const result = await this.usersRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }
}
