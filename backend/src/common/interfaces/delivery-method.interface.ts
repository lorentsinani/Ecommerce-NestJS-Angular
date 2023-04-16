import { DeliveryMethod } from '../constants/enums/delivery-method.enum';

export interface IDeliveryMethod {
  id: number;
  delivery_method_name: string;

  phone_number: string;

  delivery_time: string;

  delivery_method: DeliveryMethod;

  created_at: Date;

  updated_at: Date;
}
