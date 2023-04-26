import { ICategory } from 'src/common/interfaces/category.interface';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Category implements ICategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  category_name: string;

  @Column()
  category_desc: string;

  @Column({ length: 255 })
  category_image_url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
