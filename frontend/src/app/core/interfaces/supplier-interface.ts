export interface Suppliers {
    id: number;
    companyName: string;
    contactName: string;
    contactTitle: string;
    address: string;
    city: string;
    region: string;
    postalCode?: string;
    country: string;
    phoneNumber: string;
    faxNumber?: string;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
  }