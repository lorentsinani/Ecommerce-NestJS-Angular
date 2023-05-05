export interface Currency {
  id?: number;
  code: string;
  exchangeRate: number;
  isBase: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
