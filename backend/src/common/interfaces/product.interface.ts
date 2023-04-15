import { ICategory } from './category.interface';
import { IProductDetails } from './product-details.interface';
import { ISuppliers } from './suppliers.interface';

export interface IProduct {
  id: number;
  product_name: string;
  product_code: string;
  supplier: ISuppliers;
  category: ICategory;
  released_date: Date;
  price_with_vat: number;
  price_without_vat: number;
  vat: number;
  availability_in_stock: number;
  discount: number;
  product_details: IProductDetails;
  created_at: Date;
  updated_at: Date;
}
