import { Repository, DataSource, InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import { CreateOrderItemDto } from '../../common/dtos/order-items/create-order-items.dto';
import { UpdateOrderItemDto } from '../../common/dtos/order-items/update-order-items.dto';
import { OrderItems } from '../entities/order-items.entity';

export class OrderItemsRepository extends Repository<OrderItems> {
  constructor(dataSource: DataSource) {
    super(OrderItems, dataSource.createEntityManager());
  }

  createOrderItem(createOrderItemDto: CreateOrderItemDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(OrderItems).values(createOrderItemDto).returning('*').execute();
  }

  findAllOrderItems(): Promise<OrderItems[]> {
    return this.find();
  }

  findOrderItemById(id: number): Promise<OrderItems | null> {
    return this.createQueryBuilder('order_items').where('id = :id', { id }).getOne();
  }

  updateOrderItem(id: number, updateOrderItemDto: UpdateOrderItemDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(OrderItems).set(updateOrderItemDto).where('id = :id', { id }).returning('*').execute();
  }

  deleteOrderItem(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(OrderItems).where('id = :id', { id }).returning('*').execute();
  }
}
