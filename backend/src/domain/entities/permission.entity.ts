import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Objects } from './objects.entity';
import { RolePermissions } from './role-permissions.entity';

// store permissions that have pattern like 'can action a object"
@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  action: string;

  @Column({ type: 'int' })
  object_id: number;

  @ManyToOne(() => Objects)
  @JoinColumn({ name: 'object_id', referencedColumnName: 'id' })
  object: Objects;

  @OneToMany(() => RolePermissions, role_permission => role_permission.permission)
  role_permissions: RolePermissions[];
}