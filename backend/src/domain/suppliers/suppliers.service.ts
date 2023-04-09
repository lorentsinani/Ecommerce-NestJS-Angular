import { Injectable } from '@nestjs/common';
import { ISuppliers } from '../../common/interfaces/suppliers.interface';
import { CreateSupplierDto } from '../../common/dtos/suppliers/create-supplier.dto';
import { UpdateSupplierDto } from '../../common/dtos/suppliers/update-supplier.dto';
import { SuppliersRepository } from './suppliers.repository';

@Injectable()
export class SuppliersService {
  constructor(private readonly suppliersRepository: SuppliersRepository) {}

  async createSupplier(supplierBody: CreateSupplierDto): Promise<ISuppliers> {
    return this.suppliersRepository.createSupplier(supplierBody);
  }

  async findAll(): Promise<ISuppliers[]> {
    return this.suppliersRepository.find();
  }

  async findSupplierById(id: number): Promise<ISuppliers> {
    return this.suppliersRepository.findSupplierById(id);
  }

  async findOneByEmail(email: string): Promise<ISuppliers> {
    return this.suppliersRepository.findSupplierByEmail(email);
  }

  async updateSupplier(id: number, supplierBody: UpdateSupplierDto): Promise<ISuppliers> {
    return this.suppliersRepository.updateSupplier(id, supplierBody);
  }

  async deleteSupplier(id: number): Promise<ISuppliers> {
    return this.suppliersRepository.deleteSupplier(id);
  }
}
