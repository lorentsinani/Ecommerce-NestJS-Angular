import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateSupplierDto } from 'src/common/dtos/suppliers.dtos/create-supplier.dto';
import { Suppliers } from '../entities/suppliers.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ISuppliers } from 'src/common/interfaces/suppliers.interface';
import { UpdateSupplierDto } from 'src/common/dtos/suppliers.dtos/update-supplier.dto';

@Injectable()
export class SuppliersService {
  constructor(@InjectRepository(Suppliers) private suppliersRepository: Repository<Suppliers>) {}

  create(supplierBody: CreateSupplierDto): Promise<ISuppliers> {
    const supplier = this.suppliersRepository.create({ ...supplierBody });

    return this.suppliersRepository.save(supplier);
  }

  async findOneById(id: number): Promise<ISuppliers> {
    const supplier = await this.suppliersRepository.findOne({ where: { id } });

    if (!supplier) {
      throw new HttpException('Supplier not found!', HttpStatus.NOT_FOUND);
    }
    return supplier;
  }

  findAll(): Promise<ISuppliers[]> {
    return this.suppliersRepository.find();
  }

  async remove(id: number): Promise<DeleteResult> {
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
