import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { UserType } from 'src/common/constants/enums/user-type.enum';
import { ISuppliers } from 'src/common/interfaces/suppliers.interface';

@Entity()
export class Suppliers implements ISuppliers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  company_name: string;

  @Column({ length: 100 })
  contact_name: string;

  @Column({ type: 'enum', enum: UserType, default: UserType.Customer })
  contact_title: UserType;

  @Column({ length: 100 })
  address: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 50 })
  region: string;

  @Column({ length: 20 })
  postal_code: string;

  @Column({ length: 50 })
  country: string;

  @Column({ length: 20 })
  phone_number: string;

  @Column({ length: 20 })
  fax_number: string;

  @Column({ unique: true, length: 100 })
  email: string;

  @CreateDateColumn()
  created_At: Date;

  @UpdateDateColumn()
  updated_At: Date;
}
