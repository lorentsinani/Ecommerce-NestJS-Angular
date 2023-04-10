import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ISuppliers } from '../../common/interfaces/suppliers.interface';
import { CreateSupplierDto } from '../../common/dtos/suppliers/create-supplier.dto';
import { UpdateSupplierDto } from '../../common/dtos/suppliers/update-supplier.dto';
import { SuppliersRepository } from './suppliers.repository';

const createExceptionMessage = 'Supplier is not created';
const findExceptionMessage = 'Supplier not found';
@Injectable()
export class SuppliersService {
  constructor(private readonly suppliersRepository: SuppliersRepository) {}

  async create(supplierBody: CreateSupplierDto): Promise<ISuppliers> {
    const createdSupplier = await this.suppliersRepository.createSupplier(supplierBody);

    if (!createdSupplier) {
      throw new HttpException(createExceptionMessage, HttpStatus.BAD_REQUEST);
    }

    return createdSupplier.raw;
  }

  async findAll(): Promise<ISuppliers[]> {
    return this.suppliersRepository.findAllSupliers();
  }

  async findById(id: number): Promise<ISuppliers> {
    const supplierExist = await this.suppliersRepository.findSupplierById(id);

    if (!supplierExist) {
      throw new HttpException(findExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return supplierExist;
  }

  async findByEmail(email: string): Promise<ISuppliers> {
    const supplierExist = await this.suppliersRepository.findSupplierByEmail(email);

    if (!supplierExist) {
      throw new HttpException(findExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return supplierExist;
  }

  async update(id: number, supplierBody: UpdateSupplierDto): Promise<ISuppliers> {
    const updatedSupplier = await this.suppliersRepository.updateSupplier(id, supplierBody);

    if (!updatedSupplier.affected) {
      throw new HttpException(findExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return updatedSupplier.raw;
  }

  async delete(id: number): Promise<ISuppliers> {
    const deletedSupplier = await this.suppliersRepository.deleteSupplier(id);

    if (deletedSupplier.affected) {
      throw new HttpException(findExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedSupplier.raw;
  }
}
