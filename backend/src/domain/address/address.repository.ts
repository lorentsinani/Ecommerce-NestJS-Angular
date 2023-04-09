import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Address } from '../entities/address.entity';
import { IAddress } from '../../common/interfaces/address.interface';

@Injectable()
export class AddressRepository extends Repository<Address> {
  constructor(dataSource: DataSource) {
    super(Address, dataSource.createEntityManager());
  }

  async deleteAddress(id: number): Promise<IAddress> {
    const address = await this.findOne({ where: { id } });

    if (!address) {
      throw new HttpException('Address not found', HttpStatus.NOT_FOUND);
    }

    await this.createQueryBuilder().delete().from(Address).where('id = :id', { id }).returning('*').execute();
    return address;
  }
}
