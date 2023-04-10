import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCurrencyDto } from '../../common/dtos/currency/create-currency.dto';
import { ICurrency } from '../../common/interfaces/currency.interface';
import { UpdateCurrencyDto } from '../../common/dtos/currency/update-currency.dto';
import { CurrencyRepository } from './currency.repository';

const createExceptionMessage = 'Currency is not created';
const findExceptionMessage = 'Currency not found';
@Injectable()
export class CurrencyService {
  constructor(private readonly currencyRepository: CurrencyRepository) {}

  async create(currencyBody: CreateCurrencyDto): Promise<ICurrency> {
    const createdCurrency = await this.currencyRepository.createCurrency(currencyBody);

    if (!createdCurrency) {
      throw new HttpException(createExceptionMessage, HttpStatus.BAD_REQUEST);
    }

    return createdCurrency.raw;
  }

  async findAll(): Promise<ICurrency[]> {
    const existCurrency = await this.currencyRepository.findAllCurrencies();

    if (!existCurrency) {
      throw new HttpException(findExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return existCurrency;
  }

  async findById(id: number): Promise<ICurrency> {
    const existCurrency = await this.currencyRepository.findCurrencyById(id);

    if (!existCurrency) {
      throw new HttpException(findExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return existCurrency;
  }

  async findByCode(code: string): Promise<ICurrency> {
    const existCurrency = await this.currencyRepository.findCurrencyByCode(code);

    if (!existCurrency) {
      throw new HttpException(findExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return existCurrency;
  }

  async update(id: number, currencyBody: UpdateCurrencyDto): Promise<ICurrency> {
    const updatedCurrency = await this.currencyRepository.updateCurrency(id, currencyBody);

    if (!updatedCurrency.affected) {
      throw new HttpException(findExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return updatedCurrency.raw;
  }

  async delete(id: number): Promise<ICurrency> {
    const deletedCurrency = await this.currencyRepository.deleteCurrency(id);

    if (!deletedCurrency.affected) {
      throw new HttpException(findExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedCurrency.raw;
  }
}
