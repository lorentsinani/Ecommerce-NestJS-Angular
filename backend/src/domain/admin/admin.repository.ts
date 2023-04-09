import { Admin } from './../entities/admin.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { IAdmin } from '../../common/interfaces/admin.interface';
import { User } from '../entities/user.entity';
import { UpdateAdminDto } from '../../common/dtos/admin/update-admin.dto';
import { CreateAdminDto } from '../../common/dtos/admin/create-admin.dto';

@Injectable()
export class AdminRepository extends Repository<Admin> {
  constructor(dataSource: DataSource) {
    super(Admin, dataSource.createEntityManager());
  }

  async createAdmin(createAdminDto: CreateAdminDto): Promise<IAdmin> {
    const createdAdmin = await this.createQueryBuilder()
      .insert()
      .into(Admin)
      .values(createAdminDto)
      .returning('*')
      .execute();

    return createdAdmin.raw;
  }

  async findAllAdmins(): Promise<IAdmin[]> {
    return this.find();
  }

  async findAdminById(id: number): Promise<IAdmin> {
    const admin = await this.findOne({ where: { user_id: id } });
    if (!admin) {
      throw new HttpException('Admin not found', HttpStatus.NOT_FOUND);
    }

    return admin;
  }

  async findAdminByEmail(email: string): Promise<IAdmin> {
    const admin = await this.createQueryBuilder('admin')
      .innerJoinAndSelect('admin.user', 'user', 'user.email = :email', { email })
      .getOne();

    if (!admin) {
      throw new HttpException('Admin not found', HttpStatus.NOT_FOUND);
    }

    return admin;
  }

  async updateAdmin(user_id: number, updateAdminDto: UpdateAdminDto): Promise<IAdmin> {
    const updatedAdmin = await this.createQueryBuilder()
      .update(Admin)
      .set(updateAdminDto)
      .where('user_id = :user_id', { user_id })
      .execute();

    if (!updatedAdmin.affected) {
      throw new HttpException('Admin not found', HttpStatus.NOT_FOUND);
    }
    return updatedAdmin.raw;
  }

  async deleteAdmin(user_id: number): Promise<IAdmin> {
    const deletedAdmin = await this.manager
      .getRepository(User)
      .createQueryBuilder()
      .delete()
      .from(User)
      .where('id = :id', { id: user_id })
      .returning('*')
      .execute();

    if (!deletedAdmin.affected) {
      throw new HttpException('Admin not found', HttpStatus.NOT_FOUND);
    }

    return deletedAdmin.raw;
  }
}
