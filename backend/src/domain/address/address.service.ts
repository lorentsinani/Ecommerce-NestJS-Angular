import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { IAddress } from '../../common/interfaces/address.interface';
import { CreateAddressDto } from '../../common/dtos/address/create-address.dto';
import { UpdateAddressDto } from '../../common/dtos/address/update-address.dto';
import { AddressRepository } from './address.repository';

@Injectable()
export class AddressService {
  constructor(private readonly addressRepository: AddressRepository) {}

  async create(addressBody: CreateAddressDto): Promise<IAddress> {
    const address = this.addressRepository.create(addressBody);

    return this.addressRepository.save(address);
  }

  async findOneById(id: number): Promise<IAddress> {
    const address = await this.addressRepository.findOne({ where: { id } });

    if (!address) {
      throw new HttpException('Address not found!', HttpStatus.NOT_FOUND);
    }
    return address;
  }

  async findAll(): Promise<IAddress[]> {
    return this.addressRepository.find();
  }

  async update(id: number, addressBody: UpdateAddressDto): Promise<UpdateResult> {
    const updatedAddress = await this.addressRepository.update(id, addressBody);

    if (updatedAddress.affected === 0) {
      throw new HttpException('Address not found!', HttpStatus.NOT_FOUND);
    }
    return updatedAddress;
  }

  async delete(id: number): Promise<IAddress> {
    return this.addressRepository.deleteAddress(id);
  }
}
