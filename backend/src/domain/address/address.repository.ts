import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { IAddress } from '../../common/interfaces/address.interface';
import { Address } from '../entities/address.entity';
import { CreateAddressDto } from '../../common/dtos/address/create-address.dto';
import { UpdateAddressDto } from '../../common/dtos/address/update-address.dto';

@Injectable()
export class AddressRepository extends Repository<Address> {
  constructor(dataSource: DataSource) {
    super(Address, dataSource.createEntityManager());
  }

  async createAddress(createAddressDto: CreateAddressDto): Promise<IAddress> {
    const createdAddress = await this.createQueryBuilder()
      .insert()
      .into(Address)
      .values(createAddressDto)
      .returning('*')
      .execute();

    return createdAddress.raw;
  }

  async findAddressById(id: number): Promise<IAddress> {
    const addressExist = await this.findOne({ where: { id } });

    if (!addressExist) {
      throw new HttpException('Address not found', HttpStatus.NOT_FOUND);
    }

    return addressExist;
  }

  async findAddressByFirstName(first_name: string): Promise<IAddress> {
    const addressExist = await this.findOne({ where: { first_name } });

    if (!addressExist) {
      throw new HttpException('Address not found', HttpStatus.NOT_FOUND);
    }

    return addressExist;
  }

  async updateAddress(id: number, updateAddressDto: UpdateAddressDto): Promise<IAddress> {
    const updatedAddress = await this.createQueryBuilder()
      .update(Address)
      .set(updateAddressDto)
      .where('id = :id', { id })
      .returning('*')
      .execute();

    if (!updatedAddress.affected) {
      throw new HttpException('Address not found', HttpStatus.NOT_FOUND);
    }

    return updatedAddress.raw;
  }

  async deleteAddress(id: number): Promise<IAddress> {
    const deletedAddress = await this.createQueryBuilder()
      .delete()
      .from(Address)
      .where('id = :id', { id })
      .returning('*')
      .execute();

    if (!deletedAddress.affected) {
      throw new HttpException('Address not found', HttpStatus.NOT_FOUND);
    }

    return deletedAddress.raw;
  }
}
