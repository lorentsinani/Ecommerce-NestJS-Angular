import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ISuppliers } from '../../common/interfaces/suppliers.interface';
import { CreateSupplierDto } from '../../common/dtos/suppliers/create-supplier.dto';
import { UpdateSupplierDto } from '../../common/dtos/suppliers/update-supplier.dto';
import { SuppliersRepository } from './suppliers.repository';

@Injectable()
export class SuppliersService {
  private NotCreatedExceptionMessage = 'Supplier is not created';
  private NotFoundExceptionMessage = 'Supplier not found';

  constructor(private readonly suppliersRepository: SuppliersRepository) {}

  async create(supplierBody: CreateSupplierDto): Promise<ISuppliers> {
    const createdSupplier = await this.suppliersRepository.createSupplier(supplierBody);

    if (!createdSupplier) {
      throw new HttpException(this.NotCreatedExceptionMessage, HttpStatus.BAD_REQUEST);
    }

    return createdSupplier.raw[0];
  }

  async findAll(): Promise<ISuppliers[]> {
    return this.suppliersRepository.findAllSuppliers();
  }

  async findById(id: number): Promise<ISuppliers> {
    const supplierExist = await this.suppliersRepository.findSupplierById(id);

    if (!supplierExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return supplierExist;
  }

  async findByEmail(email: string): Promise<ISuppliers> {
    const supplierExist = await this.suppliersRepository.findSupplierByEmail(email);

    if (!supplierExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return supplierExist;
  }

  async update(id: number, supplierBody: UpdateSupplierDto): Promise<ISuppliers> {
    const updatedSupplier = await this.suppliersRepository.updateSupplier(id, supplierBody);

    if (!updatedSupplier.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return updatedSupplier.raw[0];
  }

  async delete(id: number): Promise<ISuppliers> {
    const deletedSupplier = await this.suppliersRepository.deleteSupplier(id);

    if (deletedSupplier.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedSupplier.raw[0];
  }
}
