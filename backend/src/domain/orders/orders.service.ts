import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orders } from '../entities/orders.entity';

@Injectable()
export class OrdersService {
  constructor(@InjectRepository(Orders) private ordersRepository: Repository<Orders>) {}

  async create(createOrderDto: any) {
    const created = this.ordersRepository.create(createOrderDto);
    return await this.ordersRepository.save(created);
  }
}
