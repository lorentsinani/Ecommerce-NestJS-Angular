export interface ICurrency {
  id: number;
  code: string;
  exchangeRate: number;
  isBase: boolean;
  createdAt: Date;
  updatedAt: Date;
}
