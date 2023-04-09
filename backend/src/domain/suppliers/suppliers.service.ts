import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ISuppliers } from '../../common/interfaces/suppliers.interface';
import { CreateSupplierDto } from '../../common/dtos/suppliers/create-supplier.dto';
import { UpdateSupplierDto } from '../../common/dtos/suppliers/update-supplier.dto';
import { SuppliersRepository } from './suppliers.repository';

@Injectable()
export class SuppliersService {
  constructor(private readonly suppliersRepository: SuppliersRepository) {}

  async create(supplierBody: CreateSupplierDto): Promise<ISuppliers> {
    const supplier = this.suppliersRepository.create(supplierBody);

    return this.suppliersRepository.save(supplier);
  }

  async findOneById(id: number): Promise<ISuppliers> {
    const supplier = await this.suppliersRepository.findOne({ where: { id } });

    if (!supplier) {
      throw new HttpException('Supplier not found!', HttpStatus.NOT_FOUND);
    }
    return supplier;
  }

  async findAll(): Promise<ISuppliers[]> {
    return this.suppliersRepository.find();
  }

  async delete(id: number): Promise<DeleteResult> {
    const deletedSupplier = await this.suppliersRepository.delete(id);

    if (deletedSupplier.affected === 0) {
      throw new HttpException('Supplier not found', HttpStatus.NOT_FOUND);
    }
    return deletedSupplier;
  }

  async update(id: number, supplierBody: UpdateSupplierDto): Promise<UpdateResult> {
    const updateSupplier = await this.suppliersRepository.update(id, supplierBody);

    if (updateSupplier.affected === 0) {
      throw new HttpException('Supplier not found!', HttpStatus.NOT_FOUND);
    }
    return updateSupplier;
  }
}
