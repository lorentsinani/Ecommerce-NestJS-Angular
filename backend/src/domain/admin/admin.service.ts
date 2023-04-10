import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { IAdmin } from '../../common/interfaces/admin.interface';
import { CreateAdminDto } from '../../common/dtos/admin/create-admin.dto';
import { UpdateAdminDto } from '../../common/dtos/admin/update-admin.dto';
import { AdminRepository } from './admin.repository';

@Injectable()
export class AdminService {
  constructor(private readonly adminRepository: AdminRepository) {}

  async create(createAdminDto: CreateAdminDto): Promise<IAdmin> {
    const createdAdmin = await this.adminRepository.createAdmin(createAdminDto);

    if (!createdAdmin) {
      throw new HttpException('Admin is not created', HttpStatus.BAD_REQUEST);
    }
    return createdAdmin.raw[0];
  }

  async findAll(): Promise<IAdmin[]> {
    return this.adminRepository.findAllAdmins();
  }

  async findByEmail(email: string): Promise<IAdmin> {
    const admin = await this.adminRepository.findAdminByEmail(email);

    if (!admin) {
      throw new HttpException('Admin not found', HttpStatus.NOT_FOUND);
    }

    return admin;
  }
  async findById(user_id: number): Promise<IAdmin> {
    const admin = await this.adminRepository.findAdminById(user_id);

    if (!admin) {
      throw new HttpException('Admin not found', HttpStatus.NOT_FOUND);
    }

    return admin;
  }

  async update(user_id: number, updateAdminDto: UpdateAdminDto): Promise<IAdmin> {
    const updatedAdmin = await this.adminRepository.updateAdmin(user_id, updateAdminDto);

    if (!updatedAdmin.affected) {
      throw new HttpException('Admin not found', HttpStatus.NOT_FOUND);
    }

    return updatedAdmin.raw[0];
  }

  async delete(user_id: number): Promise<IAdmin> {
    const deletedAdmin = await this.adminRepository.deleteAdmin(user_id);

    if (!deletedAdmin.affected) {
      throw new HttpException('Admin not found', HttpStatus.NOT_FOUND);
    }

    return deletedAdmin.raw[0];
  }
}
