import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { UpdateResult } from 'typeorm';
import { CreateCurrencyDto } from '../../common/dtos/currency/create-currency.dto';
import { ICurrency } from '../../common/interfaces/currency.interface';
import { UpdateCurrencyDto } from '../../common/dtos/currency/update-currency.dto';

@Controller('currency')
export class CurrencyController {
  constructor(private currencyService: CurrencyService) {}

  @Post()
  async create(@Body() currencyBody: CreateCurrencyDto): Promise<ICurrency> {
    return this.currencyService.create(currencyBody);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<ICurrency> {
    return this.currencyService.findOneById(id);
  }

  @Get()
  async findAll() {
    return this.currencyService.findAll();
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<ICurrency> {
    return this.currencyService.delete(id);
  }

  @Patch(':id')
  async updateCurrency(
    @Param('id', ParseIntPipe) id: number,
    @Body() currencyBody: UpdateCurrencyDto
  ): Promise<UpdateResult> {
    return this.currencyService.update(id, currencyBody);
  }
}
