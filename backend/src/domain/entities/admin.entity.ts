import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { PermissionLevel } from '../../common/constants/enums/permission-level.enum';
import { IAdmin } from '../../common/interfaces/admin.interface';

@Entity()
export class Admin implements IAdmin {
  @PrimaryColumn({ name: 'user_id' })
  userId: number;

  @Column({ name: 'permission_level', type: 'enum', enum: PermissionLevel })
  permissionLevel: PermissionLevel;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
