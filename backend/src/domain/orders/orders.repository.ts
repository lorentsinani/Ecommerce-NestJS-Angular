import { Repository, DataSource, InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import { Order } from '../entities/orders.entity';
import { CreateOrdersDto } from '../../common/dtos/orders/create-orders.dto';
import { UpdateOrdersDto } from '../../common/dtos/orders/update-orders.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersRepository extends Repository<Order> {
  constructor(dataSource: DataSource) {
    super(Order, dataSource.createEntityManager());
  }

  createOrders(createOrderDto: CreateOrdersDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Order).values(createOrderDto).returning('*').execute();
  }

  findAllOrders(): Promise<Order[]> {
    return this.find();
  }

  findOrdersById(id: number): Promise<Order | null> {
    return this.createQueryBuilder('orders').where('id = :id', { id }).getOne();
  }

  findOrdersByCode(code: string): Promise<Order | null> {
    return this.createQueryBuilder('orders').where('code = :code', { code }).getOne();
  }

  updateOrders(id: number, updateOrderDto: UpdateOrdersDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Order).set(updateOrderDto).where('id = :id', { id }).returning('*').execute();
  }

  deleteOrders(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(Order).where('id = :id', { id }).returning('*').execute();
  }
}
