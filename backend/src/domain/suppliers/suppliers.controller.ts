import { Body, Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Patch, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto } from '../../common/dtos/suppliers/create-supplier.dto';
import { UpdateSupplierDto } from '../../common/dtos/suppliers/update-supplier.dto';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { QueryExceptionFilter } from '../../common/filters/query.exception.filter';
import { Suppliers } from '../entities/suppliers.entity';

@Controller('suppliers')
@UsePipes(new ValidationPipe())
@UseFilters(new QueryExceptionFilter('Suppliers'))
export class SuppliersController {
  constructor(private suppliersService: SuppliersService) {}

  @Post()
  create(@Body() supplierBody: CreateSupplierDto): Promise<Suppliers> {
    return this.suppliersService.create(supplierBody);
  }

  @Get()
  findAll(): Promise<Suppliers[]> {
    return this.suppliersService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Promise<Suppliers> {
    return this.suppliersService.findById(id);
  }

  @Patch(':id')
  @UsePipes(new NullDtoValidationPipe())
  update(@Param('id', ParseIntPipe) id: number, @Body() supplierBody: UpdateSupplierDto): Promise<Suppliers> {
    return this.suppliersService.update(id, supplierBody);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<Suppliers> {
    return this.suppliersService.delete(id);
  }
}
