import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Check, JoinColumn } from 'typeorm';
import { Product } from './product.entity';
import { IReviews } from '../../common/interfaces/reviews.interface';

@Entity()
export class Reviews implements IReviews {
  @PrimaryGeneratedColumn()
  id: number;

  product_id: number;

  @ManyToOne(() => Product, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'product_id', referenceColumnName: 'id' })
  product: Product;

  @Column({ default: -1 })
  customer_id: number;

  @Column({ nullable: true })
  guest_name: string;

  @Column({ type: 'integer', transformer: { to: value => value, from: value => parseInt(value) } })
  @Check('rating >= 1 AND rating <= 5')
  rating: number;

  @Column()
  review_text: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  review_date: Date;
}
