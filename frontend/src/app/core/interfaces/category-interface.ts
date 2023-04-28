export interface Category {
  id?: number;
  category_name: string;
  category_desc: string;
  image: File;
  category_image_url?: string;
  created_at?: Date;
  updated_at?: Date;
}
