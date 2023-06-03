import { OrderStatus } from '../../../../../backend/src/common/constants/enums/orders-status.enum';

export interface OrdersStatus {
  id: number;
  statusName: OrderStatus;
  description: string;
}
