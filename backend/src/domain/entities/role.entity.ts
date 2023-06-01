import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from '../../common/constants/enums/user-rol.enum';
import { IRole } from '../../common/interfaces/role.interface';

// roles store roles in application
@Entity()
export class Role implements IRole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ enum: UserRole, unique: true })
  name: UserRole;
}
