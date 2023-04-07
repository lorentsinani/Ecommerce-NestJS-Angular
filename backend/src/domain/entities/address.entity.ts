import { IAddress } from 'src/common/interfaces/address.interface';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Address implements IAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  address_line1: string;

  @Column({ length: 255 })
  address_line2: string;

  @Column({ length: 100 })
  city: string;

  @Column({ length: 50 })
  state: string;

  @Column({ length: 50 })
  postal_code: string;

  @Column({ length: 15 })
  country: string;

  @Column({ unique: true, length: 100 })
  email: string;

  @Column({ length: 20 })
  phone: string;

  @Column({ length: 50 })
  first_name: string;

  @Column({ length: 50 })
  last_name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
