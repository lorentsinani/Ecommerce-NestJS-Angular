import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { CreateCurrencyDto } from '../../common/dtos/currency/create-currency.dto';
import { ICurrency } from '../../common/interfaces/currency.interface';
import { UpdateCurrencyDto } from '../../common/dtos/currency/update-currency.dto';
import { CurrencyRepository } from './currency.repository';

@Injectable()
export class CurrencyService {
  constructor(private readonly currencyRepository: CurrencyRepository) {}

  async create(currencyBody: CreateCurrencyDto): Promise<ICurrency> {
    const currency = this.currencyRepository.create(currencyBody);

    return this.currencyRepository.save(currency);
  }

  async findOneById(id: number): Promise<ICurrency> {
    const currency = await this.currencyRepository.findOne({ where: { id } });

    if (!currency) {
      throw new HttpException('Currency not found!', HttpStatus.NOT_FOUND);
    }
    return currency;
  }

  async findAll(): Promise<ICurrency[]> {
    return this.currencyRepository.find();
  }

  async update(id: number, currencyBody: UpdateCurrencyDto): Promise<UpdateResult> {
    const updateCurrency = await this.currencyRepository.update(id, currencyBody);

    if (updateCurrency.affected === 0) {
      throw new HttpException('Currency not found!', HttpStatus.NOT_FOUND);
    }
    return updateCurrency;
  }

  async delete(id: number): Promise<ICurrency> {
    return this.currencyRepository.deleteCurrency(id);
  }
}
