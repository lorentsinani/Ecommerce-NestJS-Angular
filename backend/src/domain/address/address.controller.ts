import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { IAddress } from 'src/common/interfaces/address.interface';
import { UpdateResult } from 'typeorm';
import { AddressService } from './address.service';
import { CreateAddressDto } from 'src/common/dtos/address/create-address.dto';
import { UpdateAddressDto } from 'src/common/dtos/address/update-address.dto';

@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Post()
  async create(@Body() addressBody: CreateAddressDto): Promise<IAddress> {
    return this.addressService.create(addressBody);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<IAddress> {
    return this.addressService.findOneById(id);
  }

  @Get()
  async findAll(): Promise<IAddress[]> {
    return this.addressService.findAll();
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<IAddress> {
    return this.addressService.delete(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() addressBody: UpdateAddressDto): Promise<UpdateResult> {
    return this.addressService.update(id, addressBody);
  }
}
