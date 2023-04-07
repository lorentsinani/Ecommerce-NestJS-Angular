export interface IAddress {
  id: number;
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country?: string;
  email?: string;
  phone?: string;
  first_name: string;
  last_name: string;
  created_at: Date;
  updated_at: Date;
}
