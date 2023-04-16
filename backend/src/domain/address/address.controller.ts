import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { IAddress } from 'src/common/interfaces/address.interface';
import { AddressService } from './address.service';
import { CreateAddressDto } from 'src/common/dtos/address/create-address.dto';
import { UpdateAddressDto } from 'src/common/dtos/address/update-address.dto';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { QueryExceptionFilter } from '../../common/filters/query.exception.filter';

@Controller('address')
@UsePipes(new ValidationPipe())
@UseFilters(new QueryExceptionFilter('Address'))
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Post()
  async create(@Body() addressBody: CreateAddressDto): Promise<IAddress> {
    return this.addressService.create(addressBody);
  }

  @Get()
  async findAll(): Promise<IAddress[]> {
    return this.addressService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<IAddress> {
    return this.addressService.findById(id);
  }

  @Patch(':id')
  @UsePipes(new NullDtoValidationPipe())
  async update(@Param('id', ParseIntPipe) id: number, @Body() addressBody: UpdateAddressDto): Promise<IAddress> {
    return this.addressService.update(id, addressBody);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<IAddress> {
    return this.addressService.delete(id);
  }
}
