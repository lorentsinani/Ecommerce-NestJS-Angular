import { Body, Controller, Delete, Get, Param } from '@nestjs/common';
import { ParseIntPipe, Patch, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { Currency } from './../entities/currency.entity';
import { CurrencyService } from './currency.service';
import { CreateCurrencyDto } from '../../common/dtos/currency/create-currency.dto';
import { UpdateCurrencyDto } from '../../common/dtos/currency/update-currency.dto';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { QueryExceptionFilter } from '../../common/filters/query.exception.filter';

@Controller('currency')
@UsePipes(new ValidationPipe())
@UseFilters(new QueryExceptionFilter('Currency'))
export class CurrencyController {
  constructor(private currencyService: CurrencyService) {}

  @Post()
  create(@Body() currencyBody: CreateCurrencyDto): Promise<Currency> {
    return this.currencyService.create(currencyBody);
  }

  @Get()
  findAll(): Promise<Currency[]> {
    return this.currencyService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Promise<Currency> {
    return this.currencyService.findById(id);
  }

  @Patch(':id')
  @UsePipes(new NullDtoValidationPipe())
  update(@Param('id', ParseIntPipe) id: number, @Body() currencyBody: UpdateCurrencyDto): Promise<Currency> {
    return this.currencyService.update(id, currencyBody);
  }

  @Delete(':id')
  deleteCurrency(@Param('id', ParseIntPipe) id: number): Promise<Currency> {
    return this.currencyService.delete(id);
  }
}
