import { Injectable } from '@nestjs/common';
import { CreateCurrencyDto } from '../../common/dtos/currency/create-currency.dto';
import { ICurrency } from '../../common/interfaces/currency.interface';
import { UpdateCurrencyDto } from '../../common/dtos/currency/update-currency.dto';
import { CurrencyRepository } from './currency.repository';

@Injectable()
export class CurrencyService {
  constructor(private readonly currencyRepository: CurrencyRepository) {}

  async createCurrency(currencyBody: CreateCurrencyDto): Promise<ICurrency> {
    return this.currencyRepository.createCurrency(currencyBody);
  }

  async findAll(): Promise<ICurrency[]> {
    return this.currencyRepository.find();
  }

  async findCurrencyById(id: number): Promise<ICurrency> {
    return this.currencyRepository.findCurrencyById(id);
  }

  async findCurrencyByCode(code: string): Promise<ICurrency> {
    return this.currencyRepository.findCurrencyByCode(code);
  }

  async updateCurrency(id: number, currencyBody: UpdateCurrencyDto): Promise<ICurrency> {
    return this.currencyRepository.updateCurrency(id, currencyBody);
  }

  async deleteCurrency(id: number): Promise<ICurrency> {
    return this.currencyRepository.deleteCurrency(id);
  }
}
