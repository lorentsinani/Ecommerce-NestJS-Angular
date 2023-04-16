import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Currency } from '../entities/currency.entity';
import { CreateCurrencyDto } from '../../common/dtos/currency/create-currency.dto';
import { UpdateCurrencyDto } from '../../common/dtos/currency/update-currency.dto';

@Injectable()
export class CurrencyRepository extends Repository<Currency> {
  constructor(dataSource: DataSource) {
    super(Currency, dataSource.createEntityManager());
  }

  createCurrency(createCurrencyDto: CreateCurrencyDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Currency).values(createCurrencyDto).returning('*').execute();
  }

  findAllCurrencies(): Promise<Currency[]> {
    return this.find();
  }

  findCurrencyById(id: number): Promise<Currency | null> {
    return this.createQueryBuilder('currency').where('currency.id = :id', { id }).getOne();
  }

  findCurrencyByCode(code: string): Promise<Currency | null> {
    return this.createQueryBuilder('currency').where('currency.code = :code', { code }).getOne();
  }

  updateCurrency(id: number, updateCurrencyDto: UpdateCurrencyDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Currency).set(updateCurrencyDto).where('id = :id', { id }).returning('*').execute();
  }

  deleteCurrency(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(Currency).where('id = :id', { id }).returning('*').execute();
  }
}
