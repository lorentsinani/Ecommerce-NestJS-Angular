import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Admin } from './../entities/admin.entity';
import { User } from '../entities/user.entity';
import { UpdateAdminDto } from '../../common/dtos/admin/update-admin.dto';
import { CreateAdminDto } from '../../common/dtos/admin/create-admin.dto';

@Injectable()
export class AdminRepository extends Repository<Admin> {
  constructor(dataSource: DataSource) {
    super(Admin, dataSource.createEntityManager());
  }

  createAdmin(createAdminDto: CreateAdminDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Admin).values(createAdminDto).returning('*').execute();
  }

  findAllAdmins(): Promise<Admin[]> {
    return this.find({ relations: ['user'] });
  }

  findAdminById(id: number): Promise<Admin | null> {
    return this.createQueryBuilder('admin').innerJoinAndSelect('admin.user', 'user', 'user.id = :id', { id }).getOne();
  }

  findAdminByEmail(email: string): Promise<Admin | null> {
    return this.createQueryBuilder('admin').innerJoinAndSelect('admin.user', 'user', 'user.email = :email', { email }).getOne();
  }

  updateAdmin(user_id: number, updateAdminDto: UpdateAdminDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Admin).set(updateAdminDto).where('user_id = :user_id', { user_id }).execute();
  }

  deleteAdmin(user_id: number): Promise<DeleteResult> {
    return this.manager.getRepository(User).createQueryBuilder().delete().from(User).where('id = :id', { id: user_id }).returning('*').execute();
  }
}
