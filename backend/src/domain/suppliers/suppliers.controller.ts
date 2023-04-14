import { Body, Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Patch, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto } from '../../common/dtos/suppliers/create-supplier.dto';
import { ISupplier } from '../../common/interfaces/supplier.interface';
import { UpdateSupplierDto } from '../../common/dtos/suppliers/update-supplier.dto';
import { DuplicateKeyExceptionFilter } from '../../common/filters/duplicate-key-exception.filter';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';

@Controller('suppliers')
@UsePipes(new ValidationPipe())
export class SuppliersController {
  constructor(private suppliersService: SuppliersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseFilters(new DuplicateKeyExceptionFilter('Suppliers'))
  async create(@Body() supplierBody: CreateSupplierDto): Promise<ISupplier> {
    return this.suppliersService.create(supplierBody);
  }

  @Get()
  async findAll(): Promise<ISupplier[]> {
    return this.suppliersService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<ISupplier> {
    return this.suppliersService.findById(id);
  }

  @Patch(':id')
  @UsePipes(new NullDtoValidationPipe())
  @UseFilters(new DuplicateKeyExceptionFilter('Suppliers'))
  async update(@Param('id', ParseIntPipe) id: number, @Body() supplierBody: UpdateSupplierDto): Promise<ISupplier> {
    return this.suppliersService.update(id, supplierBody);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<ISupplier> {
    return this.suppliersService.delete(id);
  }
}
