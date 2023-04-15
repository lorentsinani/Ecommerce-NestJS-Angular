import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

import { Producer } from './producer.entity';
import { IProductDetails } from '../../common/interfaces/product-details.interface';

@Entity()
export class ProductDetails implements IProductDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, unique: true })
  origin: string;

  @Column()
  warranty: number;

  @Column({ length: 100 })
  color: string;

  @Column({ length: 100 })
  size: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  producer_id: number;

  @ManyToOne(() => Producer, { nullable: false })
  @JoinColumn({ name: 'producer_id', referencedColumnName: 'id' })
  producer: Producer;
}
