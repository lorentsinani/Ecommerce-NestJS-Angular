import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { PermissionLevel } from '../../common/constants/enums/permission-level.enum';
import { IAdmin } from '../../common/interfaces/admin.interface';

@Entity()
export class Admin implements IAdmin {
  @PrimaryColumn()
  user_id: number;

  @Column({ type: 'enum', enum: PermissionLevel })
  permission_level: PermissionLevel;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
