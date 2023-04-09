import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Admin } from '../entities/admin.entity';
import { IAdmin } from '../../common/interfaces/admin.interface';

@Injectable()
export class AdminRepository extends Repository<Admin> {
  constructor(dataSource: DataSource) {
    super(Admin, dataSource.createEntityManager());
  }

  async deleteAdmin(id: number): Promise<IAdmin> {
    // this should be changed
    const deletedAdmin = await this.findOne({ where: { id } });

    if (!deletedAdmin) {
      throw new HttpException('Admin not found', HttpStatus.NOT_FOUND);
    }

    await this.createQueryBuilder().delete().from(Admin).where('id = :id', { id }).returning('*').execute();
    return deletedAdmin;
  }
}
