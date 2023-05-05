import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Product } from './product.entity';
import { IProductImages } from '../../common/interfaces/product-images.interface';

@Entity()
export class ProductImages implements IProductImages {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer' })
  productId: number;

  @ManyToOne(() => Product, { nullable: false })
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product: Product;

  @Column({ name: 'image_url', type: 'varchar', length: 255 })
  imageUrl: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
