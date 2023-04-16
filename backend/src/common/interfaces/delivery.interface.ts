import { IDeliveryMethod } from './delivery-method.interface';
import { IOrder } from './order.interface';

export interface IDelivery {
  id: number;
  delivery_date: Date;
  delivery_comments: string;
  delivery_cost: number;
  delivery_method_id: number;
  delivery_method: IDeliveryMethod;
  delivery_status: string;
  promised_delivery_date: Date;
  delivery_order_id: number;
  order: IOrder;
  created_at: Date;
  updated_at: Date;
}
