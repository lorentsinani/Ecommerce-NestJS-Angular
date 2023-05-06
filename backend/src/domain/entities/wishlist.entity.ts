import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';
import { User } from './user.entity';

@Entity()
@Index(['customerId', 'productId'], { unique: true })
export class Wishlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'customer_id', type: 'integer' })
  customerId: number;

  @Column({ name: 'product_id', type: 'integer' })
  productId: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'customerId', referencedColumnName: 'id' })
  customer: User;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'productId', referencedColumnName: 'id' })
  product: Product;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
