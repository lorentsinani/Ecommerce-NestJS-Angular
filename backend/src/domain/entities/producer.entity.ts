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

  @Column({ name: 'established_year' })
  establishedYear: number;

  @Column({ name: 'contact_email', length: 255 })
  contactEmail: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
