import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ICurrency } from '../../common/interfaces/currency.interface';
import { Currency } from '../entities/currency.entity';

@Injectable()
export class CurrencyRepository extends Repository<Currency> {
  constructor(dataSource: DataSource) {
    super(Currency, dataSource.createEntityManager());
  }

  async deleteCurrency(id: number): Promise<ICurrency> {
    const deletedCurrency = await this.findOne({ where: { id } });

    if (!deletedCurrency) {
      throw new HttpException('Admin not found', HttpStatus.NOT_FOUND);
    }

    await this.createQueryBuilder().delete().from(Currency).where('id = :id', { id }).returning('*').execute();
    return deletedCurrency;
  }
}
