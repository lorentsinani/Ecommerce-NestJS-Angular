import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ISuppliers } from '../../common/interfaces/suppliers.interface';
import { Suppliers } from '../entities/suppliers.entity';
import { CreateSupplierDto } from '../../common/dtos/suppliers/create-supplier.dto';
import { UpdateSupplierDto } from '../../common/dtos/suppliers/update-supplier.dto';

@Injectable()
export class SuppliersRepository extends Repository<Suppliers> {
  constructor(dataSource: DataSource) {
    super(Suppliers, dataSource.createEntityManager());
  }

  async createSupplier(createSupplierDto: CreateSupplierDto): Promise<ISuppliers> {
    const createdSupplier = await this.createQueryBuilder()
      .insert()
      .into(Suppliers)
      .values(createSupplierDto)
      .returning('*')
      .execute();

    return createdSupplier.raw;
  }

  async findSupplierById(id: number): Promise<ISuppliers> {
    const supplierExist = await this.findOne({ where: { id } });

    if (!supplierExist) {
      throw new HttpException('Supplier not found', HttpStatus.NOT_FOUND);
    }

    return supplierExist;
  }

  async findSupplierByEmail(email: string): Promise<ISuppliers> {
    const supplierExist = await this.findOne({ where: { email } });

    if (!supplierExist) {
      throw new HttpException('Supplier not found', HttpStatus.NOT_FOUND);
    }

    return supplierExist;
  }

  async updateSupplier(id: number, updateSupplierDto: UpdateSupplierDto): Promise<ISuppliers> {
    const updatedSupplier = await this.createQueryBuilder()
      .update(Suppliers)
      .set(updateSupplierDto)
      .where('id = :id', { id })
      .returning('*')
      .execute();

    if (!updatedSupplier.affected) {
      throw new HttpException('Supplier not found', HttpStatus.NOT_FOUND);
    }

    return updatedSupplier.raw;
  }

  async deleteSupplier(id: number): Promise<ISuppliers> {
    const deletedSupplier = await this.createQueryBuilder()
      .delete()
      .from(Suppliers)
      .where('id = :id', { id })
      .returning('*')
      .execute();

    if (!deletedSupplier.affected) {
      throw new HttpException('Supplier not found', HttpStatus.NOT_FOUND);
    }

    return deletedSupplier.raw;
  }
}
