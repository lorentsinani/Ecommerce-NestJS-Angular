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
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';

@Controller('currency')
export class CurrencyController {
  constructor(private currencyService: CurrencyService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseFilters(new DuplicateKeyExceptionFilter())
  async createCurrency(@Body() currencyBody: CreateCurrencyDto): Promise<ICurrency> {
    return this.currencyService.createCurrency(currencyBody);
  }

  @Get()
  async findAll(): Promise<ICurrency[]> {
    return this.currencyService.findAll();
  }

  @Get(':id')
  async findCurrencyById(@Param('id', ParseIntPipe) id: number): Promise<ICurrency> {
    return this.currencyService.findCurrencyById(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe(), new NullDtoValidationPipe())
  @UseFilters(new DuplicateKeyExceptionFilter())
  async updateCurrency(
    @Param('id', ParseIntPipe) id: number,
    @Body() currencyBody: UpdateCurrencyDto
  ): Promise<ICurrency> {
    return this.currencyService.updateCurrency(id, currencyBody);
  }

  @Delete(':id')
  async deleteCurrency(@Param('id', ParseIntPipe) id: number): Promise<ICurrency> {
    return this.currencyService.deleteCurrency(id);
  }
}
