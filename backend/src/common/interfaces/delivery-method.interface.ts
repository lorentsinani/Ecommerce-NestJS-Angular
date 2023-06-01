import { DeliveryMethod } from '../constants/enums/delivery-method.enum';

export interface IDeliveryMethod {
  id: number;
  deliveryMethodName: string;

  phoneNumber: string;

  deliveryTime: string;

  deliveryMethod: DeliveryMethod;

  createdAt: Date;

  updatedAt: Date;
}
