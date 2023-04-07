import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ type: 'date' })
  hire_date: Date;

  @Column({ length: 50 })
  job_title: string;

  @Column({ length: 100, nullable: true })
  address: string;

  @Column({ length: 255, nullable: true })
  photo_url: string;

  @Column({ type: 'decimal', check: '(salary > 250)', nullable: true })
  salary: number;
}
