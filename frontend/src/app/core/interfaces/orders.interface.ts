import { Address } from './address.interface';
import { Currency } from './currency.interface';
import { Employee } from './employee.interface';
import { OrdersStatus } from './order-status.interface';
import { User } from './user.interface';

export interface Order {
  id: number;
  orderCode: string;
  customerId: number;
  customer: User;
  orderComment: string;
  currencyId: number;
  currency: Currency;
  employeeId: number;
  employee: Employee;
  orderStatusId: number;
  ordersStatus: OrdersStatus;
  addressId: number;
  address: Address;
  orderDate: Date;
  totalAmountWithVat: number;
  totalAmountWithoutVat: number;
  vat: number;
}
