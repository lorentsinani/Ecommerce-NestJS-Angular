import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { IUser } from '../../common/interfaces/user.interface';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async deleteUser(id: number): Promise<IUser> {
    const user = await this.findOne({ where: { id } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    await this.createQueryBuilder().delete().from(User).where('id = :id', { id }).returning('*').execute();

    return user;
  }
}
