import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Suppliers } from '../entities/suppliers.entity';
import { CreateSupplierDto } from '../../common/dtos/suppliers/create-supplier.dto';
import { UpdateSupplierDto } from '../../common/dtos/suppliers/update-supplier.dto';

@Injectable()
export class SuppliersRepository extends Repository<Suppliers> {
  constructor(dataSource: DataSource) {
    super(Suppliers, dataSource.createEntityManager());
  }

  createSupplier(createSupplierDto: CreateSupplierDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Suppliers).values(createSupplierDto).returning('*').execute();
  }

  findAllSuppliers(): Promise<Suppliers[]> {
    return this.find();
  }

  findSupplierById(id: number): Promise<Suppliers | null> {
    return this.createQueryBuilder('suppliers').where('suppliers.id = :id', { id }).getOne();
  }

  findSupplierByEmail(email: string): Promise<Suppliers | null> {
    return this.createQueryBuilder('suppliers').where('suppliers.email = :email', { email }).getOne();
  }

  updateSupplier(id: number, updateSupplierDto: UpdateSupplierDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Suppliers).set(updateSupplierDto).where('id = :id', { id }).returning('*').execute();
  }

  deleteSupplier(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(Suppliers).where('id = :id', { id }).returning('*').execute();
  }
}
