import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { Address } from '../entities/address.entity';
import { IAddress } from '../../common/interfaces/address.interface';
import { CreateAddressDto } from '../../common/dtos/address/create-address.dto';
import { UpdateAddressDto } from '../../common/dtos/address/update-address.dto';

@Injectable()
export class AddressService {
  constructor(@InjectRepository(Address) private addressRepository: Repository<Address>) {}

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
    const updateaddress = await this.addressRepository.update(id, addressBody);

    if (updateaddress.affected === 0) {
      throw new HttpException('Address not found!', HttpStatus.NOT_FOUND);
    }
    return updateaddress;
  }

  async remove(id: number): Promise<DeleteResult> {
    const deletedaddress = await this.addressRepository.delete(id);

    if (deletedaddress.affected === 0) {
      throw new HttpException('Address not found', HttpStatus.NOT_FOUND);
    }
    return deletedaddress;
  }
}
