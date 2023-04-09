import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { PermissionLevel } from '../../common/constants/enums/permission-level.enum';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ type: 'enum', enum: PermissionLevel })
  permission_level: PermissionLevel;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
