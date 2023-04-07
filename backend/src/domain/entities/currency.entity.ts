import { ICurrency } from 'src/common/interfaces/currency.interface';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Currency implements ICurrency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 3 })
  code: string;

  @Column()
  exchange_rate: number;

  @Column({ default: false })
  is_base: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
