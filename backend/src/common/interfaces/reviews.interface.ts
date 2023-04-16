import { IProduct } from './product.interface';
import { IUser } from './user.interface';

export interface IReviews {
  id: number;
  product: IProduct;
  customer: IUser;
  guest_name: string | null;
  rating: number;
  review_text: string;
  review_date: Date;
}
