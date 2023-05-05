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

  @Column({ name: 'order_code', type: 'varchar', length: 10 })
  orderCode: string;

  @Column({ name: 'customer_id', type: 'integer' })
  customerId: number;

  @Column({ name: 'order_comment', type: 'varchar', length: 255 })
  orderComment: string;

  @Column({ name: 'currency_id', type: 'integer' })
  currencyId: number;

  @Column({ name: 'employee_id', type: 'integer' })
  employeeId: number;

  @Column({ name: 'order_status_id', type: 'integer' })
  orderStatusId: number;

  @Column({ name: 'address_id', type: 'integer' })
  addressId: number;

  @Column({ name: 'order_date', type: 'date' })
  orderDate: Date;

  @Column({ name: 'total_amount_with_vat', type: 'decimal', precision: 10, scale: 2 })
  totalAmountWithVat: number;

  @Column({ name: 'total_amount_without_vat', type: 'decimal', precision: 10, scale: 2 })
  totalAmountWithoutVat: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  vat: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'customer_id', referencedColumnName: 'id' })
  customer: User;

  @ManyToOne(() => Currency)
  @JoinColumn({ name: 'currency_id', referencedColumnName: 'id' })
  currency: Currency;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'employee_id', referencedColumnName: 'userId' })
  employee: Employee;

  @ManyToOne(() => Address)
  @JoinColumn({ name: 'address_id', referencedColumnName: 'id' })
  address: Address;

  @ManyToOne(() => OrdersStatus)
  @JoinColumn({ name: 'order_status_id', referencedColumnName: 'id' })
  ordersStatus: OrdersStatus;

  @BeforeInsert()
  @BeforeUpdate()
  calculatePriceWithVat() {
    if (this.vat && this.totalAmountWithoutVat) {
      this.totalAmountWithVat = this.totalAmountWithoutVat * (1 + this.vat / 100);
    }
  }
}
