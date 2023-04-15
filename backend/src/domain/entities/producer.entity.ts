import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IProducer } from '../../common/interfaces/producer.interface';

@Entity()
export class Producer implements IProducer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  country: string;

  @Column()
  established_year: number;

  @Column({ length: 255 })
  contact_email: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
