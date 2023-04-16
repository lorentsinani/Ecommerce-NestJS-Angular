import { Product } from '../../domain/entities/product.entity';

export interface IProductImages {
  id: number;
  product_id: number;
  product: Product;
  image_url: string;
  created_at: Date;
  updated_at: Date;
}
