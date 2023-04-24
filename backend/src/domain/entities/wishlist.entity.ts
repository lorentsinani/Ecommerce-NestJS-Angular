import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';
import { User } from './user.entity';

@Entity()
@Index(['customer_id', 'product_id'], { unique: true })
export class Wishlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer' })
  customer_id: number;

  @Column({ type: 'integer' })
  product_id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'customer_id', referencedColumnName: 'id' })
  customer: User;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product: Product;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
