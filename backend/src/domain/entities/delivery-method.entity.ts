import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, Entity } from 'typeorm';
import { DeliveryMethod as DeliveryMethodEnum } from '../../common/constants/enums/delivery-method.enum';
import { IDeliveryMethod } from '../../common/interfaces/delivery-method.interface';

@Entity()
export class DeliveryMethod implements IDeliveryMethod {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'delivery_method_name', type: 'varchar', length: 50 })
  deliveryMethodName: string;

  @Column({ name: 'phone_number', type: 'varchar', length: 50 })
  phoneNumber: string;

  @Column({ name: 'delivery_time', type: 'interval' })
  deliveryTime: string;

  @Column({ name: 'delivery_method', enum: DeliveryMethodEnum })
  deliveryMethod: DeliveryMethodEnum;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
