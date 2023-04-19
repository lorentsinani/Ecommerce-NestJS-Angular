import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Orders } from './orders.entity';
import { Product } from './product.entity';

@Entity()
export class OrderItems {
  @PrimaryGeneratedColumn()
  order_item_id: number;

  @Column()
  order_id: number;

  @Column()
  product_id: number;

  @Column()
  quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price_with_vat: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price_without_vat: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  vat: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total_amount: number;

  @ManyToOne(() => Orders)
  @JoinColumn({ name: 'order_id', referencedColumnName: 'id' })
  orders: Orders;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product: Product;

  @BeforeInsert()
  @BeforeUpdate()
  calculatePriceWithVat() {
    if (this.vat && this.price_without_vat) {
      this.price_with_vat = this.price_without_vat * (1 + this.vat / 100);
    }
  }
}
