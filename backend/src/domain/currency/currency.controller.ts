import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateCurrencyDto } from '../../common/dtos/currency/create-currency.dto';
import { ICurrency } from '../../common/interfaces/currency.interface';
import { UpdateCurrencyDto } from '../../common/dtos/currency/update-currency.dto';

@Controller('currency')
export class CurrencyController {
  constructor(private currencyService: CurrencyService) {}

  @Post()
  async createCurrency(@Body() currencyBody: CreateCurrencyDto): Promise<any> {
    return await this.currencyService.create(currencyBody);
  }

  @Get(':id')
  async findCurrency(@Param('id', ParseIntPipe) id: number): Promise<ICurrency> {
    return await this.currencyService.findOneById(id);
  }

  @Get()
  async findAllCurrencies() {
    return await this.currencyService.findAll();
  }

  @Delete(':id')
  async removeCurrency(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return await this.currencyService.remove(id);
  }

  @Patch(':id')
  async updateCurrency(
    @Param('id', ParseIntPipe) id: number,
    @Body() currencyBody: UpdateCurrencyDto,
  ): Promise<UpdateResult> {
    return await this.currencyService.update(id, currencyBody);
  }
}
