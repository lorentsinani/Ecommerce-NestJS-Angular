export interface ISupplier {
  id: number;
  company_name: string;
  contact_name: string;
  contact_title?: string;
  address: string;
  city: string;
  region?: string;
  postal_code: string;
  country: string;
  phone_number: string;
  fax_number?: string;
  email: string;
  created_At: Date;
  updated_At: Date;
}
