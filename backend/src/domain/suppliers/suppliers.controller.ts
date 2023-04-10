import { Body, Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Patch, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto } from '../../common/dtos/suppliers/create-supplier.dto';
import { ISuppliers } from '../../common/interfaces/suppliers.interface';
import { UpdateSupplierDto } from '../../common/dtos/suppliers/update-supplier.dto';
import { DuplicateKeyExceptionFilter } from '../../common/filters/duplicate-key-exception.filter';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';

@Controller('suppliers')
export class SuppliersController {
  constructor(private suppliersService: SuppliersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseFilters(new DuplicateKeyExceptionFilter())
  async create(@Body() supplierBody: CreateSupplierDto): Promise<ISuppliers> {
    return this.suppliersService.create(supplierBody);
  }

  @Get()
  async findAll(): Promise<ISuppliers[]> {
    return this.suppliersService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<ISuppliers> {
    return this.suppliersService.findById(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe(), new NullDtoValidationPipe())
  @UseFilters(new DuplicateKeyExceptionFilter())
  async update(@Param('id', ParseIntPipe) id: number, @Body() supplierBody: UpdateSupplierDto): Promise<ISuppliers> {
    return this.suppliersService.update(id, supplierBody);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<ISuppliers> {
    return this.suppliersService.delete(id);
  }
}
