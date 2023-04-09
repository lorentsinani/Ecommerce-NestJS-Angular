import { Injectable } from '@nestjs/common';
import { IAddress } from '../../common/interfaces/address.interface';
import { CreateAddressDto } from '../../common/dtos/address/create-address.dto';
import { UpdateAddressDto } from '../../common/dtos/address/update-address.dto';
import { AddressRepository } from './address.repository';

@Injectable()
export class AddressService {
  constructor(private readonly addressRepository: AddressRepository) {}

  async createAddress(addressBody: CreateAddressDto): Promise<IAddress> {
    return this.addressRepository.create(addressBody);
  }

  async findAll(): Promise<IAddress[]> {
    return this.addressRepository.find();
  }

  async findAddressById(id: number): Promise<IAddress> {
    return this.addressRepository.findAddressById(id);
  }

  async updateAddress(id: number, addressBody: UpdateAddressDto): Promise<IAddress> {
    return this.addressRepository.updateAddress(id, addressBody);
  }

  async deleteAddress(id: number): Promise<IAddress> {
    return this.addressRepository.deleteAddress(id);
  }
}
