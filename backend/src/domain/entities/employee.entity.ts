import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Check } from 'typeorm';
import { User } from './user.entity';
import { IAdmin } from '../../common/interfaces/admin.interface';
import { IEmployee } from '../../common/interfaces/employee.interface';

@Entity()
export class Employee implements IEmployee {
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

  @Column({ type: 'decimal', nullable: true })
  @Check('(salary > 250)')
  salary: number;
}
