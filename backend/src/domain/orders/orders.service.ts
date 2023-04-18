import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { UpdateOrdersDto } from '../../common/dtos/orders/update-orders.dto';
import { Orders } from '../entities/orders.entity';
import { OrdersRepository } from './orders.repository';
import { CreateOrdersDto } from '../../common/dtos/orders/create-orders.dto';

@Injectable()
export class OrdersService {
  private NotCreateExceptionMessage = 'Order is not created';
  private NotFoundExceptionMessage = 'Order is not found';
  constructor(private readonly ordersRepostiory: OrdersRepository) {}

  async create(creatOrderDto: CreateOrdersDto) {
    const createdOrder = await this.ordersRepostiory.createOrders(creatOrderDto);

    if (!this.getIdentifierId(createdOrder)) {
      throw new HttpException(this.NotCreateExceptionMessage, HttpStatus.BAD_REQUEST);
    }

    return createdOrder.raw[0];
  }

  async findAll(): Promise<Orders[]> {
    return this.ordersRepostiory.findAllOrders();
  }

  async findById(id: number): Promise<Orders> {
    const orderExist = await this.ordersRepostiory.findOrdersById(id);

    if (!orderExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }
    return orderExist;
  }

  async findByCode(url: string): Promise<Orders> {
    const orderExist = await this.ordersRepostiory.findOrdersByCode(url);

    if (!orderExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }
    return orderExist;
  }

  async update(id: number, updateOrderDto: UpdateOrdersDto) {
    const updatedOrder = await this.ordersRepostiory.updateOrders(id, updateOrderDto);

    if (!updatedOrder.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }
    return updatedOrder.raw[0];
  }

  async delete(id: number) {
    const deletedOrder = await this.ordersRepostiory.deleteOrders(id);

    if (!deletedOrder.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedOrder.raw[0];
  }

  getIdentifierId(result: InsertResult) {
    return result.identifiers[0].id == -1 ? false : true;
  }
}
