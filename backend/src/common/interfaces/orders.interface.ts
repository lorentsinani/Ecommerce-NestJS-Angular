import { Address } from '../../domain/entities/address.entity';
import { Currency } from '../../domain/entities/currency.entity';
import { Employee } from '../../domain/entities/employee.entity';
import { OrdersStatus } from '../../domain/entities/orders-status.entity';
import { User } from '../../domain/entities/user.entity';

export interface IOrder {
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
