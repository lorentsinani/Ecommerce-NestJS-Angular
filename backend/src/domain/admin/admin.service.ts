import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, ReturningStatementNotSupportedError, UpdateResult } from 'typeorm';
import { Admin } from '../entities/admin.entity';
import { IAdmin } from '../../common/interfaces/admin.interface';
import { CreateAdminDto } from '../../common/dtos/admin/create-admin.dto';
import { UpdateAdminDto } from '../../common/dtos/admin/update-admin.dto';
@Injectable()
export class AdminService {
  constructor(@InjectRepository(Admin) private adminsRepository: Repository<Admin>) {}

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

  async create(createAdminDto: CreateAdminDto): Promise<IAdmin> {
    const admin = this.adminsRepository.create(createAdminDto);
    return this.adminsRepository.save(admin);
  }

  async update(id: number, updateAdminDto: UpdateAdminDto): Promise<UpdateResult> {
    const result = await this.adminsRepository.update(id, updateAdminDto);
    if (result.affected === 0) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  async delete(id: number): Promise<DeleteResult> {
    const result = await this.adminsRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }
}
