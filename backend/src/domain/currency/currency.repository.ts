import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { ICurrency } from '../../common/interfaces/currency.interface';
import { Currency } from '../entities/currency.entity';
import { CreateCurrencyDto } from '../../common/dtos/currency/create-currency.dto';
import { UpdateCurrencyDto } from '../../common/dtos/currency/update-currency.dto';

@Injectable()
export class CurrencyRepository extends Repository<Currency> {
  constructor(dataSource: DataSource) {
    super(Currency, dataSource.createEntityManager());
  }

  async createCurrency(createCurrencyDto: CreateCurrencyDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Currency).values(createCurrencyDto).returning('*').execute();
  }

  async findAllCurrencies(): Promise<ICurrency[]> {
    return this.find();
  }

  async findCurrencyById(id: number): Promise<ICurrency | null> {
    return this.findOne({ where: { id } });
  }

  async findCurrencyByCode(code: string): Promise<ICurrency | null> {
    return this.findOne({ where: { code } });
  }

  async updateCurrency(id: number, updateCurrencyDto: UpdateCurrencyDto): Promise<UpdateResult> {
    return this.createQueryBuilder()
      .update(Currency)
      .set(updateCurrencyDto)
      .where('id = :id', { id })
      .returning('*')
      .execute();
  }

  async deleteCurrency(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(Currency).where('id = :id', { id }).returning('*').execute();
  }
}
