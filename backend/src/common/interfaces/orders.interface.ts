import { Address } from '../../domain/entities/address.entity';
import { Currency } from '../../domain/entities/currency.entity';
import { Employee } from '../../domain/entities/employee.entity';
import { User } from '../../domain/entities/user.entity';

export interface IOrders {
  id: number;
  order_code: string;
  customer_id: number;
  customer: User;
  order_comment: string;
  currency_id: number;
  currency: Currency;
  employee_id: number;
  employee: Employee;
  order_status: string;
  order_status_id: number;
  // orders_status: OrdersStatus
  address_id: number;
  address: Address;
  order_date: Date;
  total_amount_with_vat: number;
  total_amount_without_vat: number;
  vat: number;
}
