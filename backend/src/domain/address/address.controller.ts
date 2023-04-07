import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { IAddress } from 'src/common/interfaces/address.interface';
import { DeleteResult, UpdateResult } from 'typeorm';
import { AddressService } from './address.service';
import { CreateAddressDto } from 'src/common/dtos/address/create-address.dto';
import { UpdateAddressDto } from 'src/common/dtos/address/update-address.dto';

@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Post()
  async createAddress(@Body() addressBody: CreateAddressDto): Promise<IAddress> {
    return await this.addressService.create(addressBody);
  }

  @Get(':id')
  async findAddress(@Param('id', ParseIntPipe) id: number): Promise<IAddress> {
    return await this.addressService.findOneById(id);
  }

  @Get()
  async findAllAddresses(): Promise<IAddress[]> {
    return await this.addressService.findAll();
  }

  @Delete(':id')
  async removeAddress(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return await this.addressService.remove(id);
  }

  @Patch(':id')
  async updateAddress(
    @Param('id', ParseIntPipe) id: number,
    @Body() addressBody: UpdateAddressDto,
  ): Promise<UpdateResult> {
    return await this.addressService.update(id, addressBody);
  }
}
