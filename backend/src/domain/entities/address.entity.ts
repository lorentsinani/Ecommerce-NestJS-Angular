import { IAddress } from 'src/common/interfaces/address.interface';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Address implements IAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'address_line1', length: 255 })
  addressLine1: string;

  @Column({ name: 'address_line2', length: 255 })
  addressLine2: string;

  @Column({ length: 100 })
  city: string;

  @Column({ length: 50 })
  state: string;

  @Column({ name: 'postal_code', length: 50 })
  postalCode: string;

  @Column({ length: 15 })
  country: string;

  @Column({ unique: true, length: 100 })
  email: string;

  @Column({ length: 20 })
  phone: string;

  @Column({ name: 'first_name', length: 50 })
  firstName: string;

  @Column({ name: 'last_name', length: 50 })
  lastName: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
