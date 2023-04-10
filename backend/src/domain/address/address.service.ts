import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IAddress } from '../../common/interfaces/address.interface';
import { CreateAddressDto } from '../../common/dtos/address/create-address.dto';
import { UpdateAddressDto } from '../../common/dtos/address/update-address.dto';
import { AddressRepository } from './address.repository';

@Injectable()
export class AddressService {
  private static CreateExceptionMessage = 'Address is not created';
  private static FindExceptionMessage = 'Address not found';

  constructor(private readonly addressRepository: AddressRepository) {}

  async create(addressBody: CreateAddressDto): Promise<IAddress> {
    const createdAddress = await this.addressRepository.createAddress(addressBody);

    if (!createdAddress) {
      throw new HttpException(AddressService.CreateExceptionMessage, HttpStatus.BAD_REQUEST);
    }

    return createdAddress.raw[0];
  }

  async findAll(): Promise<IAddress[]> {
    const addressExist = await this.addressRepository.findAllAddresses();

    if (!addressExist) {
      throw new HttpException(AddressService.FindExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return addressExist;
  }

  async findById(id: number): Promise<IAddress> {
    const addressExist = await this.addressRepository.findAddressById(id);

    if (!addressExist) {
      throw new HttpException(AddressService.FindExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return addressExist;
  }

  async update(id: number, addressBody: UpdateAddressDto): Promise<IAddress> {
    const updatedAddress = await this.addressRepository.updateAddress(id, addressBody);

    if (!updatedAddress) {
      throw new HttpException(AddressService.FindExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return updatedAddress.raw[0];
  }

  async delete(id: number): Promise<IAddress> {
    const deletedUser = await this.addressRepository.deleteAddress(id);

    if (!deletedUser) {
      throw new HttpException(AddressService.FindExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedUser.raw[0];
  }
}
