import { ICategory } from './category.interface';
import { IProductDetails } from './product-details.interface';
import { ISuppliers } from './suppliers.interface';

export interface IProduct {
  id: number;
  productName: string;
  productCode: string;
  supplier: ISuppliers;
  category: ICategory;
  releasedDate: Date;
  priceWithVat: number;
  priceWithoutVat: number;
  vat: number;
  availabilityInStock: number;
  discount: number;
  productDetails: IProductDetails;
  createdAt: Date;
  updatedAt: Date;
}
