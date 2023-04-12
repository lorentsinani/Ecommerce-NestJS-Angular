import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { IUser } from '../../common/interfaces/user.interface';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { UpdateUserDto } from '../../common/dtos/users/update-user.dto';
import { CreateUserDto } from '../../common/dtos/users/create-user.dto';

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  async createUser(createUserDto: CreateUserDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(User).values(createUserDto).returning('*').execute();
  }

  findAllUsers(): Promise<IUser[]> {
    return this.find();
  }

  async findUserById(id: number): Promise<IUser | null> {
    return this.createQueryBuilder('user').where('user.id = :id', { id }).getOne();
  }

  async findUserByEmail(email: string): Promise<IUser | null> {
    return this.createQueryBuilder('user').where('user.email = :email', { email }).getOne();
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(User).set(updateUserDto).where('id = :id', { id }).returning('*').execute();
  }

  async deleteUser(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(User).where('id = :id', { id }).returning('*').execute();
  }
}
