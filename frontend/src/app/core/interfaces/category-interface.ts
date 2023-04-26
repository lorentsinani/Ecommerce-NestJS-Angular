export interface Category {
  id: number;
  category_name: string;
  category_desc?: string;
  category_image_url?: string;
  parent_category_id?: number;
  created_at: Date;
  updated_at: Date;
}
