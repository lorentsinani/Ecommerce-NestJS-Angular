import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, Check } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ type: 'date' })
  hire_date: Date;

  @Column({ type: 'varchar', length: 50 })
  job_title: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  address: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  photo_url: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  @Check('salary > 250')
  salary: number;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
