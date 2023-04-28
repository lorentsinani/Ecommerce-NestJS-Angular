import { Product } from '../../domain/entities/product.entity';

export interface IProductImages {
  id: number;
  productId: number;
  product: Product;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
