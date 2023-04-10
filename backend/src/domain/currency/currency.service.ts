import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ICurrency } from '../../common/interfaces/currency.interface';
import { CreateCurrencyDto } from '../../common/dtos/currency/create-currency.dto';
import { UpdateCurrencyDto } from '../../common/dtos/currency/update-currency.dto';
import { CurrencyRepository } from './currency.repository';

@Injectable()
export class CurrencyService {
  private NotCreatedExceptionMessage = 'Currency is not created';
  private NotFoundExceptionMessage = 'Currency not found';

  constructor(private readonly currencyRepository: CurrencyRepository) {}

  async create(currencyBody: CreateCurrencyDto): Promise<ICurrency> {
    const createdCurrency = await this.currencyRepository.createCurrency(currencyBody);

    if (!createdCurrency) {
      throw new HttpException(this.NotCreatedExceptionMessage, HttpStatus.BAD_REQUEST);
    }

    return createdCurrency.raw[0];
  }

  async findAll(): Promise<ICurrency[]> {
    const currencyExist = await this.currencyRepository.findAllCurrencies();

    if (!currencyExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return currencyExist;
  }

  async findById(id: number): Promise<ICurrency> {
    const currencyExist = await this.currencyRepository.findCurrencyById(id);

    if (!currencyExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return currencyExist;
  }

  async findByCode(code: string): Promise<ICurrency> {
    const currencyExist = await this.currencyRepository.findCurrencyByCode(code);

    if (!currencyExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return currencyExist;
  }

  async update(id: number, currencyBody: UpdateCurrencyDto): Promise<ICurrency> {
    const updatedCurrency = await this.currencyRepository.updateCurrency(id, currencyBody);

    if (!updatedCurrency.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return updatedCurrency.raw[0];
  }

  async delete(id: number): Promise<ICurrency> {
    const deletedCurrency = await this.currencyRepository.deleteCurrency(id);

    if (!deletedCurrency.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedCurrency.raw[0];
  }
}
