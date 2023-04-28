import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { ISuppliers } from 'src/common/interfaces/suppliers.interface';

@Entity()
export class Suppliers implements ISuppliers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'company_name' })
  companyName: string;

  @Column({ name: 'contact_name', length: 100 })
  contactName: string;

  @Column({ name: 'contact_title' })
  contactTitle: string;

  @Column({ length: 100 })
  address: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 50 })
  region: string;

  @Column({ name: 'postal_code', length: 20 })
  postalCode: string;

  @Column({ length: 50 })
  country: string;

  @Column({ name: 'phone_number', length: 20 })
  phoneNumber: string;

  @Column({ name: 'fax_number', length: 20 })
  faxNumber: string;

  @Column({ unique: true, length: 100 })
  email: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
