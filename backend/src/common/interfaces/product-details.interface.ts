import { IProducer } from './producer.interface';

export interface IProductDetails {
  id: number;
  origin: string;
  warranty: number;
  color: string;
  size: string; // "5.5 cm x 3.2 cm x 0.8 cm".
  producer_id: number;
  producer: IProducer;
  created_at: Date;
  updated_at: Date;
}
