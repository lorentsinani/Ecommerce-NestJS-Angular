import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ISuppliers } from '../../common/interfaces/suppliers.interface';
import { Suppliers } from '../entities/suppliers.entity';

@Injectable()
export class SuppliersRepository extends Repository<Suppliers> {
  constructor(dataSource: DataSource) {
    super(Suppliers, dataSource.createEntityManager());
  }

  async deleteSupplier(id: number): Promise<ISuppliers> {
    // this should be changed
    const deletedSupplier = await this.findOne({ where: { id } });

    if (!deletedSupplier) {
      throw new HttpException('Admin not found', HttpStatus.NOT_FOUND);
    }

    await this.createQueryBuilder().delete().from(Suppliers).where('id = :id', { id }).returning('*').execute();
    return deletedSupplier;
  }
}
