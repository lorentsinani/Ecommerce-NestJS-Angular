import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Permission } from './permission.entity';
import { Role } from './role.entity';

// role permissions assign permissions to roles
@Entity()
export class RolePermissions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'role_id', type: 'int' })
  roleId: number;

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'role_id', referencedColumnName: 'id' })
  role: Role;

  @Column({ name: 'permission_id', type: 'int' })
  permissionId: number;

  @ManyToOne(() => Permission)
  @JoinColumn({ name: 'permission_id', referencedColumnName: 'id' })
  permission: Permission;
}
