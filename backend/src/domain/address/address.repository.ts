import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Address } from '../entities/address.entity';
import { CreateAddressDto } from '../../common/dtos/address/create-address.dto';
import { UpdateAddressDto } from '../../common/dtos/address/update-address.dto';

@Injectable()
export class AddressRepository extends Repository<Address> {
  constructor(dataSource: DataSource) {
    super(Address, dataSource.createEntityManager());
  }

  createAddress(createAddressDto: CreateAddressDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Address).values(createAddressDto).returning('*').execute();
  }

  findAllAddresses(): Promise<Address[]> {
    return this.find();
  }

  findAddressById(id: number): Promise<Address | null> {
    return this.createQueryBuilder('address').where('address.id = :id', { id }).getOne();
  }

  findAddressByFirstName(first_name: string): Promise<Address | null> {
    return this.createQueryBuilder('address').where('address.first_name = :first_name', { first_name }).getOne();
  }

  updateAddress(id: number, updateAddressDto: UpdateAddressDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Address).set(updateAddressDto).where('id = :id', { id }).returning('*').execute();
  }

  deleteAddress(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(Address).where('id = :id', { id }).returning('*').execute();
  }
}
