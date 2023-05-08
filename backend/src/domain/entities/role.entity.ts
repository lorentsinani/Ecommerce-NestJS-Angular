import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from '../../common/constants/enums/user-rol.enum';

// roles store roles in application
@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ enum: UserRole, unique: true })
  name: UserRole;
}
