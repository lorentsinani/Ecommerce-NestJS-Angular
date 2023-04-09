import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { IAdmin } from '../../common/interfaces/admin.interface';
import { CreateAdminDto } from '../../common/dtos/admin/create-admin.dto';
import { UpdateAdminDto } from '../../common/dtos/admin/update-admin.dto';
import { AdminRepository } from './admin.repository';
@Injectable()
export class AdminService {
  constructor(private readonly adminsRepository: AdminRepository) {}

  async create(createAdminDto: CreateAdminDto): Promise<IAdmin> {
    const admin = this.adminsRepository.create(createAdminDto);
    return this.adminsRepository.save(admin);
  }

  async findOneById(id: number): Promise<IAdmin> {
    const admin = await this.adminsRepository.findOne({ where: { id } });
    if (!admin) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return admin;
  }
  async findAll(): Promise<IAdmin[]> {
    return this.adminsRepository.find();
  }

  async update(id: number, updateAdminDto: UpdateAdminDto): Promise<UpdateResult> {
    const updatedAdmin = await this.adminsRepository.update(id, updateAdminDto);
    if (updatedAdmin.affected === 0) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return updatedAdmin;
  }

  async delete(id: number): Promise<IAdmin> {
    return this.adminsRepository.deleteAdmin(id);
  }
}
