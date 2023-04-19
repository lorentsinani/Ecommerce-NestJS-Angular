import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { OrderStatus } from '../../common/constants/enums/orders-status.enum';
import { IOrdersStatus } from '../../common/interfaces/orders-status.interface';

export class OrdersStatus implements IOrdersStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ enum: OrderStatus, unique: true })
  status_name: OrderStatus;

  @Column({ type: 'varchar', length: 255 })
  description: string;
}
