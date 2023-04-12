import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { IAddress } from '../../common/interfaces/address.interface';
import { Address } from '../entities/address.entity';
import { CreateAddressDto } from '../../common/dtos/address/create-address.dto';
import { UpdateAddressDto } from '../../common/dtos/address/update-address.dto';

@Injectable()
export class AddressRepository extends Repository<Address> {
  constructor(dataSource: DataSource) {
    super(Address, dataSource.createEntityManager());
  }

  async createAddress(createAddressDto: CreateAddressDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Address).values(createAddressDto).returning('*').execute();
  }

  async findAllAddresses(): Promise<IAddress[]> {
    return this.find();
  }

  async findAddressById(id: number): Promise<IAddress | null> {
    return this.createQueryBuilder('address').where('address.id = :id', { id }).getOne();
  }

  async findAddressByFirstName(first_name: string): Promise<IAddress | null> {
    return this.createQueryBuilder('address').where('address.first_name = :first_name', { first_name }).getOne();
  }

  async updateAddress(id: number, updateAddressDto: UpdateAddressDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Address).set(updateAddressDto).where('id = :id', { id }).returning('*').execute();
  }

  async deleteAddress(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(Address).where('id = :id', { id }).returning('*').execute();
  }
}
