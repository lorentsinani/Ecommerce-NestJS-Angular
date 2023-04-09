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
import { CurrencyService } from './currency.service';
import { CreateCurrencyDto } from '../../common/dtos/currency/create-currency.dto';
import { ICurrency } from '../../common/interfaces/currency.interface';
import { UpdateCurrencyDto } from '../../common/dtos/currency/update-currency.dto';
import { DuplicateKeyExceptionFilter } from '../../common/filters/duplicate-key-exception.filter';

@Controller('currency')
export class CurrencyController {
  constructor(private currencyService: CurrencyService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseFilters(new DuplicateKeyExceptionFilter())
  async create(@Body() currencyBody: CreateCurrencyDto): Promise<ICurrency> {
    return this.currencyService.createCurrency(currencyBody);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<ICurrency> {
    return this.currencyService.findCurrencyById(id);
  }

  @Get()
  async findAll(): Promise<ICurrency[]> {
    return this.currencyService.findAll();
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  @UseFilters(new DuplicateKeyExceptionFilter())
  async updateCurrency(
    @Param('id', ParseIntPipe) id: number,
    @Body() currencyBody: UpdateCurrencyDto
  ): Promise<ICurrency> {
    return this.currencyService.updateCurrency(id, currencyBody);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<ICurrency> {
    return this.currencyService.deleteCurrency(id);
  }
}
