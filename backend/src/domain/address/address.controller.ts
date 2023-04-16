import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from 'src/common/dtos/address/create-address.dto';
import { UpdateAddressDto } from 'src/common/dtos/address/update-address.dto';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { QueryExceptionFilter } from '../../common/filters/query.exception.filter';
import { Address } from '../entities/address.entity';

@Controller('address')
@UsePipes(new ValidationPipe())
@UseFilters(new QueryExceptionFilter('Address'))
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Post()
  create(@Body() addressBody: CreateAddressDto): Promise<Address> {
    return this.addressService.create(addressBody);
  }

  @Get()
  findAll(): Promise<Address[]> {
    return this.addressService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Promise<Address> {
    return this.addressService.findById(id);
  }

  @Patch(':id')
  @UsePipes(new NullDtoValidationPipe())
  update(@Param('id', ParseIntPipe) id: number, @Body() addressBody: UpdateAddressDto): Promise<Address> {
    return this.addressService.update(id, addressBody);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<Address> {
    return this.addressService.delete(id);
  }
}
