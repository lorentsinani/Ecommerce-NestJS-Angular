import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { CreateSupplierDto } from '../../common/dtos/suppliers/create-supplier.dto';
import { UpdateSupplierDto } from '../../common/dtos/suppliers/update-supplier.dto';
import { ISupplier } from '../../common/interfaces/supplier.interface';
import { Supplier } from '../entities/suppliers.entity';

@Injectable()
export class SuppliersRepository extends Repository<Supplier> {
  constructor(dataSource: DataSource) {
    super(Supplier, dataSource.createEntityManager());
  }

  async createSupplier(createSupplierDto: CreateSupplierDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Supplier).values(createSupplierDto).returning('*').execute();
  }

  async findAllSuppliers(): Promise<ISupplier[]> {
    return this.find();
  }

  async findSupplierById(id: number): Promise<ISupplier | null> {
    return this.findOne({ where: { id } });
  }

  async findSupplierByEmail(email: string): Promise<ISupplier | null> {
    return this.findOne({ where: { email } });
  }

  async updateSupplier(id: number, updateSupplierDto: UpdateSupplierDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Supplier).set(updateSupplierDto).where('id = :id', { id }).returning('*').execute();
  }

  async deleteSupplier(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(Supplier).where('id = :id', { id }).returning('*').execute();
  }
}
