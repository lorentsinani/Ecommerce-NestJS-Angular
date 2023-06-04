import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Check, JoinColumn } from 'typeorm';
import { Product } from './product.entity';
import { IReviews } from '../../common/interfaces/reviews.interface';
import { IUser } from '../../common/interfaces/user.interface';

@Entity()
export class Reviews implements IReviews {
  customer: IUser;
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer' })
  productId: number;

  @ManyToOne(() => Product, { nullable: false })
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
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
