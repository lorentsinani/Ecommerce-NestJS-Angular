export interface ICurrency {
  id: number;
  code: string;
  exchange_rate: number;
  is_base: boolean;
  created_at: Date;
  updated_at: Date;
}
