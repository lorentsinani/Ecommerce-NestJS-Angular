import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { IAdmin } from '../../common/interfaces/admin.interface';
import { CreateAdminDto } from '../../common/dtos/admin/create-admin.dto';
import { UpdateAdminDto } from '../../common/dtos/admin/update-admin.dto';
import { AdminRepository } from './admin.repository';

@Injectable()
export class AdminService {
  constructor(private readonly adminRepository: AdminRepository) {}

  async createAdmin(createAdminDto: CreateAdminDto): Promise<IAdmin> {
    return this.adminRepository.createAdmin(createAdminDto);
  }

  async findAdminById(user_id: number): Promise<IAdmin> {
    return this.adminRepository.findAdminById(user_id);
  }
  async findAllAdmins(): Promise<IAdmin[]> {
    return this.adminRepository.findAllAdmins();
  }

  async updateAdmin(user_id: number, updateAdminDto: UpdateAdminDto): Promise<IAdmin> {
    return this.adminRepository.updateAdmin(user_id, updateAdminDto);
  }

  async deleteAdmin(user_id: number): Promise<IAdmin> {
    return this.adminRepository.deleteAdmin(user_id);
  }
}
