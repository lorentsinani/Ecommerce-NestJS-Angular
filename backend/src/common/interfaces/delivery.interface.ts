import { IDeliveryMethod } from './delivery-method.interface';
import { IOrder } from './orders.interface';

export interface IDelivery {
  id: number;
  deliveryDate: Date;
  deliveryComments: string;
  deliveryCost: number;
  deliveryMethodId: number;
  deliveryMethod: IDeliveryMethod;
  deliveryStatus: string;
  promisedDeliveryDate: Date;
  deliveryOrderId: number;
  order: IOrder;
  createdAt: Date;
  updatedAt: Date;
}
