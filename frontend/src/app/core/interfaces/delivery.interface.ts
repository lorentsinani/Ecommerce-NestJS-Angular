import { DeliveryMethod } from './delivery-method.interface';
import { Order } from './order.interface';

export interface Delivery {
  id?: number;
  deliveryDate: Date;
  deliveryComments: string;
  deliveryCost: number;
  deliveryMethodId: number;
  deliveryMethod: DeliveryMethod;
  deliveryStatus: string;
  promisedDeliveryDate: Date;
  deliveryOrderId?: number;
  order?: Order;
}
