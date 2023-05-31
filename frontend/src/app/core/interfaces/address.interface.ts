export interface Address {
  id: number;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  email?: string;
  phone?: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
}
