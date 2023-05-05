export interface ICategory {
  id: number;
  categoryName: string;
  categoryDesc?: string;
  categoryImageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}
