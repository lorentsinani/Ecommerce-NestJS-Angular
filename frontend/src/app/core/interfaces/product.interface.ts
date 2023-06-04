export interface Product {
  id?: number;
  productName: string;
  productCode: string;
  supplierId: number;
  categoryId: number;
  releasedDate: Date;
  priceWithVat: number;
  priceWithoutVat: number;
  vat?: number;
  availabilityInStock: number;
  discount?: number;
  discountExpirationDate?: Date;
  productDetailsId: number;
  createdAt?: Date;
  updatedAt?: Date;
}
