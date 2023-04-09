import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ICurrency } from '../../common/interfaces/currency.interface';
import { Currency } from '../entities/currency.entity';
import { CreateCurrencyDto } from '../../common/dtos/currency/create-currency.dto';
import { UpdateCurrencyDto } from '../../common/dtos/currency/update-currency.dto';

@Injectable()
export class CurrencyRepository extends Repository<Currency> {
  constructor(dataSource: DataSource) {
    super(Currency, dataSource.createEntityManager());
  }

  async createCurrency(createCurrencyDto: CreateCurrencyDto): Promise<ICurrency> {
    const createdCurrency = await this.createQueryBuilder()
      .insert()
      .into(Currency)
      .values(createCurrencyDto)
      .returning('*')
      .execute();

    return createdCurrency.raw;
  }

  async findCurrencyById(id: number): Promise<ICurrency> {
    const currencyExist = await this.findOne({ where: { id } });

    if (!currencyExist) {
      throw new HttpException('Currency not found', HttpStatus.NOT_FOUND);
    }

    return currencyExist;
  }

  async findCurrencyByCode(code: string): Promise<ICurrency> {
    const currencyExist = await this.findOne({ where: { code } });

    if (!currencyExist) {
      throw new HttpException('Currency not found', HttpStatus.NOT_FOUND);
    }

    return currencyExist;
  }

  async updateCurrency(id: number, updateCurrencyDto: UpdateCurrencyDto): Promise<ICurrency> {
    const updatedCurrency = await this.createQueryBuilder()
      .update(Currency)
      .set(updateCurrencyDto)
      .where('id = :id', { id })
      .returning('*')
      .execute();

    if (!updatedCurrency.affected) {
      throw new HttpException('Currency not found', HttpStatus.NOT_FOUND);
    }

    return updatedCurrency.raw;
  }

  async deleteCurrency(id: number): Promise<ICurrency> {
    const deletedCurrency = await this.createQueryBuilder()
      .delete()
      .from(Currency)
      .where('id = :id', { id })
      .returning('*')
      .execute();

    if (!deletedCurrency.affected) {
      throw new HttpException('Currency not found', HttpStatus.NOT_FOUND);
    }

    return deletedCurrency.raw;
  }
}
