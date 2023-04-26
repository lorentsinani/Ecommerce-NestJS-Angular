import { OrderStatus } from '../constants/enums/orders-status.enum';

export interface IOrdersStatus {
  id: number;
  status_name: OrderStatus;
  description: string;
}
