import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseFilters,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { IAddress } from 'src/common/interfaces/address.interface';
import { AddressService } from './address.service';
import { CreateAddressDto } from 'src/common/dtos/address/create-address.dto';
import { UpdateAddressDto } from 'src/common/dtos/address/update-address.dto';
import { DuplicateKeyExceptionFilter } from '../../common/filters/duplicate-key-exception.filter';

@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseFilters(new DuplicateKeyExceptionFilter())
  async create(@Body() addressBody: CreateAddressDto): Promise<IAddress> {
    return this.addressService.createAddress(addressBody);
  }

  @Get()
  async findAll(): Promise<IAddress[]> {
    return this.addressService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<IAddress> {
    return this.addressService.findAddressById(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  @UseFilters(new DuplicateKeyExceptionFilter())
  async update(@Param('id', ParseIntPipe) id: number, @Body() addressBody: UpdateAddressDto): Promise<IAddress> {
    return this.addressService.updateAddress(id, addressBody);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<IAddress> {
    return this.addressService.deleteAddress(id);
  }
}
