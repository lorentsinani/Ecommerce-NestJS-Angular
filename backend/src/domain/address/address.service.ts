import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IAddress } from '../../common/interfaces/address.interface';
import { CreateAddressDto } from '../../common/dtos/address/create-address.dto';
import { UpdateAddressDto } from '../../common/dtos/address/update-address.dto';
import { AddressRepository } from './address.repository';

const createExceptionMessage = 'Address is not created';
const findExceptionMessage = 'Address not found';

@Injectable()
export class AddressService {
  constructor(private readonly addressRepository: AddressRepository) {}

  async create(addressBody: CreateAddressDto): Promise<IAddress> {
    const createdAddress = await this.addressRepository.createAddress(addressBody);

    if (!createdAddress) {
      throw new HttpException(createExceptionMessage, HttpStatus.BAD_REQUEST);
    }

    return createdAddress.raw;
  }

  async findAll(): Promise<IAddress[]> {
    const existAddress = await this.addressRepository.findAllAddresses();

    if (!existAddress) {
      throw new HttpException(findExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return existAddress;
  }

  async findById(id: number): Promise<IAddress> {
    const existAddress = await this.addressRepository.findAddressById(id);

    if (!existAddress) {
      throw new HttpException(findExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return existAddress;
  }

  async update(id: number, addressBody: UpdateAddressDto): Promise<IAddress> {
    const updatedAddress = await this.addressRepository.updateAddress(id, addressBody);

    if (!updatedAddress) {
      throw new HttpException(findExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return updatedAddress.raw;
  }

  async delete(id: number): Promise<IAddress> {
    const deletedUser = await this.addressRepository.deleteAddress(id);

    if (!deletedUser) {
      throw new HttpException(findExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedUser.raw;
  }
}
