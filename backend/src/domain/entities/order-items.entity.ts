import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './orders.entity';
import { Product } from './product.entity';

@Entity()
export class OrderItems {
  @PrimaryGeneratedColumn({ name: 'order_item_id' })
  orderItemId: number;

  @Column({ name: 'order_id' })
  orderId: number;

  @Column({ name: 'product_id' })
  productId: number;

  @Column()
  quantity: number;

  @Column({ name: 'price_with_vat', type: 'decimal', precision: 10, scale: 2 })
  priceWithVat: number;

  @Column({ name: 'price_without_vat', type: 'decimal', precision: 10, scale: 2 })
  priceWithoutVat: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  vat: number;

  @Column({ name: 'total_amount', type: 'decimal', precision: 10, scale: 2 })
  totalAmount: number;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'order_id', referencedColumnName: 'id' })
  orders: Order;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product: Product;

  @BeforeInsert()
  @BeforeUpdate()
  calculatePriceWithVat() {
    if (this.vat && this.priceWithoutVat) {
      this.priceWithVat = this.priceWithoutVat * (1 + this.vat / 100);
    }
  }
}
