import { Admin } from './../entities/admin.entity';
import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { IAdmin } from '../../common/interfaces/admin.interface';
import { User } from '../entities/user.entity';
import { UpdateAdminDto } from '../../common/dtos/admin/update-admin.dto';
import { CreateAdminDto } from '../../common/dtos/admin/create-admin.dto';

@Injectable()
export class AdminRepository extends Repository<Admin> {
  constructor(dataSource: DataSource) {
    super(Admin, dataSource.createEntityManager());
  }

  async createAdmin(createAdminDto: CreateAdminDto): Promise<InsertResult> {
    return await this.createQueryBuilder().insert().into(Admin).values(createAdminDto).returning('*').execute();
  }

  async findAllAdmins(): Promise<IAdmin[]> {
    return this.find({ relations: ['user'] });
  }

  async findAdminById(id: number): Promise<IAdmin | null> {
    return this.findOne({ where: { user_id: id }, relations: ['user'] });
  }

  async findAdminByEmail(email: string): Promise<IAdmin | null> {
    return this.createQueryBuilder('admin').innerJoinAndSelect('admin.user', 'user', 'user.email = :email', { email }).getOne();
  }

  async updateAdmin(user_id: number, updateAdminDto: UpdateAdminDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Admin).set(updateAdminDto).where('user_id = :user_id', { user_id }).execute();
  }

  async deleteAdmin(user_id: number): Promise<DeleteResult> {
    return this.manager.getRepository(User).createQueryBuilder().delete().from(User).where('id = :id', { id: user_id }).returning('*').execute();
  }
}
