import { Order } from '../../domain/entities/orders.entity';
import { Product } from '../../domain/entities/product.entity';

export interface IOrderItems {
  orderItemId: number;
  orderId: number;
  productId: number;
  quantity: number;
  priceWithVat: number;
  priceWithoutVat: number;
  vat: number;
  totalAmount: number;
  orders: Order;
  product: Product;
}
