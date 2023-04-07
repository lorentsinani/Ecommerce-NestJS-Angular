import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { PermissionLevel } from '../../common/constants/enums/permission-level.enum';
import { IAdmin } from '../../common/interfaces/admin.interface';

@Entity()
export class Admin implements IAdmin {
  @PrimaryGeneratedColumn() id: number;
  @OneToOne(() => User) @JoinColumn({ name: 'user_id' }) user: User;
  @Column({ type: 'enum', enum: PermissionLevel }) permission_level: PermissionLevel;
}
