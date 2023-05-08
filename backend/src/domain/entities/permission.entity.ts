import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Objects } from './objects.entity';
import { RolePermissions } from './role-permission.entity';
import { IPermission } from '../../common/interfaces/permission.interface';
import { PermissionAction } from '../../common/constants/enums/permission-action.enum';

// store permissions that have pattern like 'can action a object"
@Entity()
export class Permission implements IPermission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ enum: PermissionAction })
  action: PermissionAction;

  @Column({ name: 'object_id', type: 'int' })
  objectId: number;

  @ManyToOne(() => Objects)
  @JoinColumn({ name: 'object_id', referencedColumnName: 'id' })
  object: Objects;

  @OneToMany(() => RolePermissions, role_permission => role_permission.permission)
  rolePermissions: RolePermissions[];
}
