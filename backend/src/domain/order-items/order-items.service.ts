import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { OrderItemsRepository } from './order-items.repository';
import { CreateOrderItemDto } from '../../common/dtos/order-items/create-order-items.dto';
import { OrderItems } from '../entities/order-items.entity';
import { UpdateOrderItemDto } from '../../common/dtos/order-items/update-order-items.dto';
import { InsertResult } from 'typeorm';

@Injectable()
export class OrderItemsService {
  private NotCreateExceptionMessage = 'Order Item is not created';
  private NotFoundExceptionMessage = 'Order Item is not found';
  constructor(private readonly orderItemsRepository: OrderItemsRepository) {}

  async create(createOrderItemDto: CreateOrderItemDto): Promise<OrderItems> {
    const createdOrderItem = await this.orderItemsRepository.createOrderItem(createOrderItemDto);

    if (!this.getIdentifierId(createdOrderItem)) {
      throw new HttpException(this.NotCreateExceptionMessage, HttpStatus.BAD_REQUEST);
    }

    return createdOrderItem.raw[0];
  }

  async findAll(): Promise<OrderItems[]> {
    return this.orderItemsRepository.findAllOrderItems();
  }

  async findById(id: number): Promise<OrderItems> {
    const orderItemExist = await this.orderItemsRepository.findOrderItemById(id);

    if (!orderItemExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }
    return orderItemExist;
  }

  async update(id: number, updateOrderItemDto: UpdateOrderItemDto): Promise<OrderItems> {
    const updatedOrderItem = await this.orderItemsRepository.updateOrderItem(id, updateOrderItemDto);

    if (!updatedOrderItem.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }
    return updatedOrderItem.raw[0];
  }

  async delete(id: number): Promise<OrderItems> {
    const deletedOrderItem = await this.orderItemsRepository.deleteOrderItem(id);

    if (!deletedOrderItem.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedOrderItem.raw[0];
  }

  getIdentifierId(result: InsertResult): Boolean {
    return result.identifiers[0].id == -1 ? false : true;
  }
}
