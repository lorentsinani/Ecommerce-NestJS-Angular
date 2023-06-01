import { Entity, Column, OneToOne, JoinColumn, Check, PrimaryColumn } from 'typeorm';
import { User } from './user.entity';
import { IEmployee } from '../../common/interfaces/employee.interface';

@Entity()
export class Employee implements IEmployee {
  @PrimaryColumn({ name: 'user_id' })
  userId: number;

  @Column({ type: 'date' })
  hireDate: Date;

  @Column({ type: 'varchar', length: 50 })
  jobTitle: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  address: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  photoUrl: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  @Check('salary > 250')
  salary: number;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;
}
