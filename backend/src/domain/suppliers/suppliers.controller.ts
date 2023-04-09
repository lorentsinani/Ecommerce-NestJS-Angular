import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateSupplierDto } from '../../common/dtos/suppliers/create-supplier.dto';
import { ISuppliers } from '../../common/interfaces/suppliers.interface';
import { UpdateSupplierDto } from '../../common/dtos/suppliers/update-supplier.dto';

@Controller('suppliers')
export class SuppliersController {
  constructor(private suppliersService: SuppliersService) {}

  @Post()
  async create(@Body() supplierBody: CreateSupplierDto): Promise<ISuppliers> {
    return this.suppliersService.create(supplierBody);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<ISuppliers> {
    return this.suppliersService.findOneById(id);
  }

  @Get()
  async findAll() {
    return this.suppliersService.findAll();
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.suppliersService.delete(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() supplierBody: UpdateSupplierDto): Promise<UpdateResult> {
    return this.suppliersService.update(id, supplierBody);
  }
}
