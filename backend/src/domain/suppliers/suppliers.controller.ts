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
  async createSupplier(@Body() supplierBody: CreateSupplierDto): Promise<ISuppliers> {
    return this.suppliersService.createSupplier(supplierBody);
  }

  @Get()
  async findAll() {
    return this.suppliersService.findAll();
  }

  @Get(':id')
  async findSupplierById(@Param('id', ParseIntPipe) id: number): Promise<ISuppliers> {
    return this.suppliersService.findSupplierById(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe(), new NullDtoValidationPipe())
  @UseFilters(new DuplicateKeyExceptionFilter())
  async updateSupplier(@Param('id', ParseIntPipe) id: number, @Body() supplierBody: UpdateSupplierDto): Promise<ISuppliers> {
    return this.suppliersService.updateSupplier(id, supplierBody);
  }

  @Delete(':id')
  async deleteSupplier(@Param('id', ParseIntPipe) id: number): Promise<ISuppliers> {
    return this.suppliersService.deleteSupplier(id);
  }
}
