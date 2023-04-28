import { OrderStatus } from '../constants/enums/orders-status.enum';

export interface IOrdersStatus {
  id: number;
  statusName: OrderStatus;
  description: string;
}
