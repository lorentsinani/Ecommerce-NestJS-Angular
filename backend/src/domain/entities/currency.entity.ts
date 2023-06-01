import { ICurrency } from 'src/common/interfaces/currency.interface';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Currency implements ICurrency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 3 })
  code: string;

  @Column({ name: 'exchange_rate' })
  exchangeRate: number;

  @Column({ name: 'is_base', default: false })
  isBase: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
