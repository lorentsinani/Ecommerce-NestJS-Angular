import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAddressDto } from '../../common/dtos/address/create-address.dto';
import { UpdateAddressDto } from '../../common/dtos/address/update-address.dto';
import { AddressRepository } from './address.repository';
import { Address } from '../entities/address.entity';
import { InsertResult } from 'typeorm';

@Injectable()
export class AddressService {
  private NotCreatedExceptionMessage = 'Address is not created';
  private NotFoundExceptionMessage = 'Address is not found';

  constructor(private readonly addressRepository: AddressRepository) {}

  async create(addressBody: CreateAddressDto): Promise<Address> {
    const createdAddress = await this.addressRepository.createAddress(addressBody);

    if (!this.getIdentifierId(createdAddress)) {
      throw new HttpException(this.NotCreatedExceptionMessage, HttpStatus.BAD_REQUEST);
    }

    return createdAddress.raw[0];
  }

  findAll(): Promise<Address[]> {
    return this.addressRepository.findAllAddresses();
  }

  async findById(id: number): Promise<Address> {
    const addressExist = await this.addressRepository.findAddressById(id);

    if (!addressExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return addressExist;
  }

  async update(id: number, addressBody: UpdateAddressDto): Promise<Address> {
    const updatedAddress = await this.addressRepository.updateAddress(id, addressBody);

    if (!updatedAddress) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return updatedAddress.raw[0];
  }

  async delete(id: number): Promise<Address> {
    const deletedUser = await this.addressRepository.deleteAddress(id);

    if (!deletedUser) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedUser.raw[0];
  }

  getIdentifierId(result: InsertResult) {
    return result.identifiers[0].id == -1 ? false : true;
  }
}
