import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { OrderStatus } from '../../common/constants/enums/orders-status.enum';

export class OrdersStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ enum: OrderStatus, unique: true })
  status_name: OrderStatus;

  @Column({ type: 'varchar', length: 255 })
  description: string;
}
