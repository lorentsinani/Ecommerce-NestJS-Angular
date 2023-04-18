import { Repository, DataSource, InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import { Orders } from '../entities/orders.entity';
import { CreateOrdersDto } from '../../common/dtos/orders/create-orders.dto';
import { UpdateOrdersDto } from '../../common/dtos/orders/update-orders.dto';

export class OrdersRepository extends Repository<Orders> {
  constructor(dataSource: DataSource) {
    super(Orders, dataSource.createEntityManager());
  }

  createOrders(createOrderDto: CreateOrdersDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Orders).values(createOrderDto).returning('*').execute();
  }

  findAllOrders(): Promise<Orders[]> {
    return this.find();
  }

  findOrdersById(id: number): Promise<Orders | null> {
    return this.createQueryBuilder('orders').where('id = :id', { id }).getOne();
  }

  findOrdersByCode(code: string): Promise<Orders | null> {
    return this.createQueryBuilder('orders').where('code = :code', { code }).getOne();
  }

  updateOrders(id: number, updateOrderDto: UpdateOrdersDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Orders).set(updateOrderDto).where('id = :id', { id }).returning('*').execute();
  }

  deleteOrders(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(Orders).where('id = :id', { id }).returning('*').execute();
  }
}
