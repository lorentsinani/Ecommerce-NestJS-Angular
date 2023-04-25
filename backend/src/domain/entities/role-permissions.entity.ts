import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Permission } from './permission.entity';
import { Role } from './role.entity';

// role permissions assign permissions to roles
@Entity()
export class RolePermissions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  role_id: number;

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'role_id', referencedColumnName: 'id' })
  roles: Role[];

  @Column({ type: 'int' })
  permission_id: number;

  @ManyToOne(() => Permission)
  @JoinColumn({ name: 'permission_id', referencedColumnName: 'id' })
  permissions: Permission[];
}
