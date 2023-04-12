import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { ISuppliers } from '../../common/interfaces/suppliers.interface';
import { Suppliers } from '../entities/suppliers.entity';
import { CreateSupplierDto } from '../../common/dtos/suppliers/create-supplier.dto';
import { UpdateSupplierDto } from '../../common/dtos/suppliers/update-supplier.dto';

@Injectable()
export class SuppliersRepository extends Repository<Suppliers> {
  constructor(dataSource: DataSource) {
    super(Suppliers, dataSource.createEntityManager());
  }

  async createSupplier(createSupplierDto: CreateSupplierDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Suppliers).values(createSupplierDto).returning('*').execute();
  }

  async findAllSuppliers(): Promise<ISuppliers[]> {
    return this.find();
  }

  async findSupplierById(id: number): Promise<ISuppliers | null> {
    return this.createQueryBuilder('suppliers').where('suppliers.id = :id', { id }).getOne();
  }

  async findSupplierByEmail(email: string): Promise<ISuppliers | null> {
    return this.createQueryBuilder('suppliers').where('suppliers.email = :email', { email }).getOne();
  }

  async updateSupplier(id: number, updateSupplierDto: UpdateSupplierDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Suppliers).set(updateSupplierDto).where('id = :id', { id }).returning('*').execute();
  }

  async deleteSupplier(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(Suppliers).where('id = :id', { id }).returning('*').execute();
  }
}
