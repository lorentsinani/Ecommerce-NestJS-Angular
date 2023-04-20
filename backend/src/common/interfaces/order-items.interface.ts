import { Order } from '../../domain/entities/orders.entity';
import { Product } from '../../domain/entities/product.entity';

export interface IOrderItems {
  order_item_id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  price_with_vat: number;
  price_without_vat: number;
  vat: number;
  total_amount: number;
  orders: Order;
  product: Product;
}
