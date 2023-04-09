import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { IUser } from '../../common/interfaces/user.interface';
import { DataSource, Repository } from 'typeorm';
import { UpdateUserDto } from '../../common/dtos/users/update-user.dto';
import { CreateUserDto } from '../../common/dtos/users/create-user.dto';

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  async findUserById(id: number): Promise<IUser> {
    const user = await this.findOne({ where: { id } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async findUserByEmail(email: string): Promise<IUser> {
    const userExist = await this.findOne({ where: { email } });

    if (!userExist) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return userExist;
  }

  findAllUsers(): Promise<IUser[]> {
    return this.find();
  }

  async createUser(createUserDto: CreateUserDto): Promise<IUser> {
    const createdUser = await this.createQueryBuilder()
      .insert()
      .into(User)
      .values(createUserDto)
      .returning('*')
      .execute();

    return createdUser.raw;
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<IUser> {
    const updatedUser = await this.createQueryBuilder()
      .update(User)
      .set(updateUserDto)
      .where('id = :id', { id })
      .returning('*')
      .execute();

    if (!updatedUser.affected) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return updatedUser.raw;
  }

  async deleteUser(id: number): Promise<IUser> {
    const deletedUser = await this.createQueryBuilder()
      .delete()
      .from(User)
      .where('id = :id', { id })
      .returning('*')
      .execute();

    if (!deletedUser.affected) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return deletedUser.raw;
  }
}
