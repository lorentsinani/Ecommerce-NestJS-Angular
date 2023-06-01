export class DynamicProductFilterDto {
  price?: {
    min?: number;
    max?: number;
  };
  producer_id?: number;
  supplier_id?: number;
  category_id?: number;
  discount?: boolean;
  availability_in_stock?: boolean;
}
