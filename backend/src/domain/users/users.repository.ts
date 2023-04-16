import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { UpdateUserDto } from '../../common/dtos/users/update-user.dto';
import { CreateUserDto } from '../../common/dtos/users/create-user.dto';

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  createUser(createUserDto: CreateUserDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(User).values(createUserDto).returning('*').execute();
  }

  findAllUsers(): Promise<User[]> {
    return this.find();
  }

  findUserById(id: number): Promise<User | null> {
    return this.createQueryBuilder('user').where('user.id = :id', { id }).getOne();
  }

  findUserByEmail(email: string): Promise<User | null> {
    return this.createQueryBuilder('user').where('user.email = :email', { email }).getOne();
  }

  updateUser(id: number, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(User).set(updateUserDto).where('id = :id', { id }).returning('*').execute();
  }

  deleteUser(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(User).where('id = :id', { id }).returning('*').execute();
  }
}
