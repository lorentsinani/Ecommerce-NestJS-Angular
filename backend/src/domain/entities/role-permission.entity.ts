import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { Role } from './role.entity';
import { Permission } from './permission.entity';
import { IRolePermissions } from '../../common/interfaces/role-permissions.interface';

@Entity()
@Index(['roleId', 'permissionId'], { unique: true }) // @Index is used to make roleId and permissionId unique, because you don't want to attach a permission that role already has. 
export class RolePermissions implements IRolePermissions{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'role_id', type: 'int' })
  roleId: number;

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'roleId', referencedColumnName: 'id' })
  role: Role;

  @Column({ name: 'permission_id', type: 'int' })
  permissionId: number;

  @ManyToOne(() => Permission)
  @JoinColumn({ name: 'permissionId', referencedColumnName: 'id' })
  permission: Permission;
}
