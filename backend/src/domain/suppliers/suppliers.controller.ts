import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto } from 'src/common/dtos/suppliers.dtos/create-supplier.dto';
import { ISuppliers } from 'src/common/interfaces/suppliers.interface';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateSupplierDto } from 'src/common/dtos/suppliers.dtos/update-supplier.dto';

@Controller('suppliers')
export class SuppliersController {
  constructor(private suppliersService: SuppliersService) {}

  @Post('')
  async createSupplier(@Body() supplierBody: CreateSupplierDto): Promise<any> {
    return await this.suppliersService.create(supplierBody);
  }

  @Get(':id')
  async findSupplier(@Param('id', ParseIntPipe) id: number): Promise<ISuppliers> {
    return await this.suppliersService.findOneById(id);
  }

  @Get()
  async findAllSuppliers() {
    return await this.suppliersService.findAll();
  }

  @Delete('/:id')
  async removeSupplier(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return await this.suppliersService.remove(id);
  }

  @Patch('/:id')
  async updateSupplier(@Param('id', ParseIntPipe) id: number, @Body() supplierBody: UpdateSupplierDto): Promise<UpdateResult> {
    return await this.suppliersService.update(id, supplierBody);
  }
}
