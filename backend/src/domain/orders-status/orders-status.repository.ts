import { Repository, DataSource, InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import { CreateOrderStatusDto } from '../../common/dtos/orders-status/create-order-status.dto';
import { UpdateOrderStatusDto } from '../../common/dtos/orders-status/update-order-status.dto';
import { OrdersStatus } from '../entities/orders-status.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersStatusRepository extends Repository<OrdersStatus> {
  constructor(dataSource: DataSource) {
    super(OrdersStatus, dataSource.createEntityManager());
  }

  createOrderStatus(createOrderStatusDto: CreateOrderStatusDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(OrdersStatus).values(createOrderStatusDto).returning('*').execute();
  }

  findAllOrderStatus(): Promise<OrdersStatus[]> {
    return this.find();
  }

  findOrderStatusById(id: number): Promise<OrdersStatus | null> {
    return this.createQueryBuilder('orders_status').where('id = :id', { id }).getOne();
  }

  updateOrderStatus(id: number, updateOrderStatusDto: UpdateOrderStatusDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(OrdersStatus).set(updateOrderStatusDto).where('id = :id', { id }).returning('*').execute();
  }

  deleteOrderStatus(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(OrdersStatus).where('id = :id', { id }).returning('*').execute();
  }
}
