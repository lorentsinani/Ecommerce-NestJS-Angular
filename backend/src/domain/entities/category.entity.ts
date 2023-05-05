import { ICategory } from 'src/common/interfaces/category.interface';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Category implements ICategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'category_name', length: 100 })
  categoryName: string;

  @Column({ name: 'category_desc' })
  categoryDesc: string;

  @Column({ name: 'category_image_url', length: 255 })
  categoryImageUrl: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
