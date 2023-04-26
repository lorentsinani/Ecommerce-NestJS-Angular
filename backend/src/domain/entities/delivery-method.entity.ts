import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, Entity } from 'typeorm';
import { DeliveryMethod as DeliveryMethodEnum } from '../../common/constants/enums/delivery-method.enum';
import { IDeliveryMethod } from '../../common/interfaces/delivery-method.interface';

@Entity()
export class DeliveryMethod implements IDeliveryMethod {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  delivery_method_name: string;

  @Column({ type: 'varchar', length: 50 })
  phone_number: string;

  @Column({ type: 'interval' })
  delivery_time: string;

  @Column({ enum: DeliveryMethodEnum })
  delivery_method: DeliveryMethodEnum;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
