import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { CreateOrderStatusDto } from '../../common/dtos/orders-status/create-order-status.dto';
import { UpdateOrderStatusDto } from '../../common/dtos/orders-status/update-order-status.dto';
import { OrdersStatus } from '../entities/orders-status.entity';
import { OrdersStatusRepository } from './orders-status.repository';

@Injectable()
export class OrdersStatusService {
  private NotCreateExceptionMessage = 'Order Status is not created';
  private NotFoundExceptionMessage = 'Order Status is not found';
  constructor(private readonly orderStatusRepository: OrdersStatusRepository) {}

  async create(createOrderStatusDto: CreateOrderStatusDto): Promise<OrdersStatus> {
    const createdOrderStatus = await this.orderStatusRepository.createOrderStatus(createOrderStatusDto);

    if (!this.getIdentifierId(createdOrderStatus)) {
      throw new HttpException(this.NotCreateExceptionMessage, HttpStatus.BAD_REQUEST);
    }

    return createdOrderStatus.raw[0];
  }

  async findAll(): Promise<OrdersStatus[]> {
    return this.orderStatusRepository.findAllOrderStatus();
  }

  async findById(id: number): Promise<OrdersStatus> {
    const orderStatusExist = await this.orderStatusRepository.findOrderStatusById(id);

    if (!orderStatusExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }
    return orderStatusExist;
  }

  async update(id: number, updateOrderStatusDto: UpdateOrderStatusDto): Promise<OrdersStatus> {
    const updatedOrderStatus = await this.orderStatusRepository.updateOrderStatus(id, updateOrderStatusDto);

    if (!updatedOrderStatus.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }
    return updatedOrderStatus.raw[0];
  }

  async delete(id: number): Promise<OrdersStatus> {
    const deletedOrderStatus = await this.orderStatusRepository.deleteOrderStatus(id);

    if (!deletedOrderStatus.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedOrderStatus.raw[0];
  }

  getIdentifierId(result: InsertResult): Boolean {
    return result.identifiers[0].id == -1 ? false : true;
  }
}
