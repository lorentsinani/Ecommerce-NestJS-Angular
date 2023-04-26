import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from './address.entity';
import { Currency } from './currency.entity';
import { Employee } from './employee.entity';
import { IOrder } from '../../common/interfaces/orders.interface';
import { User } from './user.entity';
import { OrdersStatus } from './orders-status.entity';

@Entity()
export class Order implements IOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 10 })
  order_code: string;

  @Column({ type: 'integer' })
  customer_id: number;

  @Column({ type: 'varchar', length: 255 })
  order_comment: string;

  @Column({ type: 'integer' })
  currency_id: number;

  @Column({ type: 'integer' })
  employee_id: number;

  @Column({ type: 'integer' })
  order_status_id: number;

  @Column({ type: 'integer' })
  address_id: number;

  @Column({ type: 'date' })
  order_date: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total_amount_with_vat: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total_amount_without_vat: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  vat: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'customer_id', referencedColumnName: 'id' })
  customer: User;

  @ManyToOne(() => Currency)
  @JoinColumn({ name: 'currency_id', referencedColumnName: 'id' })
  currency: Currency;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'employee_id', referencedColumnName: 'user_id' })
  employee: Employee;

  @ManyToOne(() => Address)
  @JoinColumn({ name: 'address_id', referencedColumnName: 'id' })
  address: Address;

  @ManyToOne(() => OrdersStatus)
  @JoinColumn({ name: 'order_status_id', referencedColumnName: 'id' })
  orders_status: OrdersStatus;

  @BeforeInsert()
  @BeforeUpdate()
  calculatePriceWithVat() {
    if (this.vat && this.total_amount_without_vat) {
      this.total_amount_with_vat = this.total_amount_without_vat * (1 + this.vat / 100);
    }
  }
}
