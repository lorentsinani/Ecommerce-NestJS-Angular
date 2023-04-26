import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { DeliveryMethod } from './delivery-method.entity';
import { Order } from './orders.entity';
import { IDelivery } from '../../common/interfaces/delivery.interface';

@Entity()
export class Delivery implements IDelivery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  delivery_date: Date;

  @Column({ type: 'varchar', length: 255 })
  delivery_comments: string;

  @Column({ type: 'numeric' })
  delivery_cost: number;

  @Column({ type: 'integer' })
  delivery_method_id: number;

  @ManyToOne(() => DeliveryMethod)
  @JoinColumn({ name: 'delivery_method_id', referencedColumnName: 'id' })
  delivery_method: DeliveryMethod;

  @Column({ enum: ['pending', 'in_transit', 'delivered', 'failed'] })
  delivery_status: string;

  @Column({ type: 'date' })
  promised_delivery_date: Date;

  @Column({ type: 'integer' })
  delivery_order_id: number;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'delivery_order_id', referencedColumnName: 'id' })
  order: Order;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
