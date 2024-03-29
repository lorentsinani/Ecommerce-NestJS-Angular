import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { OrderStatus } from '../../common/constants/enums/orders-status.enum';
import { IOrdersStatus } from '../../common/interfaces/orders-status.interface';

@Entity()
export class OrdersStatus implements IOrdersStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'status_name', type: 'enum', enum: OrderStatus, unique: true })
  statusName: OrderStatus;

  @Column({ type: 'varchar', length: 255 })
  description: string;
}
