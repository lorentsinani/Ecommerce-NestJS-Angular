import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { DeliveryMethod } from './delivery-method.entity';
import { Order } from './orders.entity';
import { IDelivery } from '../../common/interfaces/delivery.interface';

@Entity()
export class Delivery implements IDelivery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'delivery_date', type: 'date' })
  deliveryDate: Date;

  @Column({ name: 'delivery_comments', type: 'varchar', length: 255 })
  deliveryComments: string;

  @Column({ name: 'delivery_cost', type: 'numeric' })
  deliveryCost: number;

  @Column({ name: 'delivery_method_id', type: 'integer' })
  deliveryMethodId: number;

  @ManyToOne(() => DeliveryMethod)
  @JoinColumn({ name: 'delivery_method_id', referencedColumnName: 'id' })
  deliveryMethod: DeliveryMethod;

  @Column({ name: 'delivery_status', enum: ['pending', 'in_transit', 'delivered', 'failed'] })
  deliveryStatus: string;

  @Column({ name: 'promised_delivery_date', type: 'date' })
  promisedDeliveryDate: Date;

  @Column({ name: 'delivery_order_id', type: 'integer' })
  deliveryOrderId: number;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'delivery_order_id', referencedColumnName: 'id' })
  order: Order;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
