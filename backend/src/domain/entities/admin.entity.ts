import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { PermissionLevel } from '../../common/constants/enums/permission-level.enum';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn() id: number;
  @OneToOne(() => User) @JoinColumn({ name: 'user_id' }) user: User;
  @Column({ type: 'enum', enum: PermissionLevel }) permission_level: PermissionLevel;
}
