import { Entity, Column, OneToOne, JoinColumn, Check, PrimaryColumn } from 'typeorm';
import { User } from './user.entity';
import { IEmployee } from '../../common/interfaces/employee.interface';

@Entity()
export class Employee implements IEmployee {
  @PrimaryColumn()
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
